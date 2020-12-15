import React from "react"
import { BlitzPage } from "blitz"
import DashboardLayout from "../layouts/DashboardLayout"
import Grid from "../components/grid/Grid"
import Card from "../components/grid/Card"
import Button from "../../components/Button"
import Table from "../components/table/Table"
import { Transaction } from "../../transactions/types"

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

const Transactions: BlitzPage = () => (
  <Grid maxCols={1}>
    <Card>
      <header className="px-6 py-4 flex items-center justify-between">
        <h2 className="font-medium text-lg">Transactions</h2>
        <Button variant="outlined">Add</Button>
      </header>
      <Table data={transactions} />
    </Card>
  </Grid>
)

Transactions.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default Transactions
