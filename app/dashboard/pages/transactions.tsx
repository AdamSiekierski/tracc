import React from "react"
import { BlitzPage } from "blitz"
import DashboardLayout from "../layouts/DashboardLayout"
import Grid from "../components/grid/Grid"
import Card from "../components/grid/Card"
import Button from "../../components/Button"
import Table from "../components/table/Table"

const Transactions: BlitzPage = () => (
  <Grid maxCols={1}>
    <Card>
      <header className="px-6 py-4 flex items-center justify-between">
        <h2 className="font-medium text-lg">Transactions</h2>
        <Button variant="outlined">Add</Button>
      </header>
      <Table
        data={[
          { a: "a", b: "b" },
          { a: "dupa", b: "abc" },
        ]}
      />
    </Card>
  </Grid>
)

Transactions.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default Transactions
