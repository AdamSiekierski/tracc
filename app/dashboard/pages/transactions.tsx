import React, { useState } from "react"
import { BlitzPage } from "blitz"
import DashboardLayout from "../layouts/DashboardLayout"
import Grid from "../components/grid/Grid"
import Card from "../components/grid/Card"
import Button from "../../components/Button"
import Table from "../components/table/Table"
import { Transaction } from "../../transactions/types"
import Modal from "../../components/modal/Modal"
import AddTransactionForm from "../components/AddTransactionForm"

const transactions: Transaction[] = [
  {
    name: "hello world",
    id: 1,
    createdAt: "09-12-2020",
    description: "hahahaha",
    value: 100,
    userId: 3,
  },
  {
    name: "hello world",
    id: 1,
    createdAt: "11-12-2020",
    description: "hahahaha",
    value: 100,
    userId: 3,
  },
  {
    name: "hello world",
    id: 1,
    createdAt: "20-04-2020",
    description: "hahahaha",
    value: 100,
    userId: 3,
  },
].reduce((acc, val) => {
  const curr: Transaction[] = []

  for (let i = 0; i < 10; i++) {
    curr.push(val)
  }

  return [...acc, ...curr]
}, [])

const Transactions: BlitzPage = () => {
  const [showAdd, setShowAdd] = useState(false)

  return (
    <>
      <Modal show={showAdd} buttons={[]} onHide={() => setShowAdd(false)}>
        <h3 className="font-medium text-lg">Add new transaction</h3>
        <AddTransactionForm />
      </Modal>
      <Grid maxCols={1}>
        <Card>
          <header className="px-6 py-4 flex items-center justify-between">
            <h2 className="font-medium text-lg">Transactions</h2>
            <Button variant="outlined" onClick={() => setShowAdd(true)}>
              Add
            </Button>
          </header>
          <Table data={transactions} />
        </Card>
      </Grid>
    </>
  )
}

Transactions.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default Transactions
