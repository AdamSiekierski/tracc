import React, { useState } from "react"
import { BlitzPage, useQuery } from "blitz"
import DashboardLayout from "../layouts/DashboardLayout"
import Grid from "../components/grid/Grid"
import Card from "../components/grid/Card"
import Button from "../../components/Button"
import Table from "../components/table/Table"
import Modal from "../../components/modal/Modal"
import AddTransactionForm from "../components/AddTransactionForm"
import getTransactions from "app/transactions/queries/getTransactions"

const Transactions: BlitzPage = () => {
  const [showAdd, setShowAdd] = useState(false)
  const [transactions] = useQuery(getTransactions, null)

  return (
    <>
      <Modal show={showAdd} buttons={[]} onHide={() => setShowAdd(false)}>
        <h3 className="font-medium text-lg mb-4">Add new transaction</h3>
        <AddTransactionForm onSuccess={() => setShowAdd(false)} />
      </Modal>
      <Grid maxCols={1}>
        <Card>
          <header className="px-6 py-4 flex items-center justify-between">
            <h2 className="font-medium text-lg">Transactions</h2>
            <Button variant="outlined" onClick={() => setShowAdd(true)}>
              Add
            </Button>
          </header>
          <Table
            data={transactions.map((transaction) => ({
              ...transaction,
              createdAt: transaction.createdAt.toString(),
            }))}
            keys={{ name: "Transaction name", value: "Value", description: "Description" }}
          />
        </Card>
      </Grid>
    </>
  )
}

Transactions.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default Transactions
