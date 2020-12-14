import React from "react"
import { BlitzPage } from "blitz"
import DashboardLayout from "../layouts/DashboardLayout"
import Grid from "../components/Grid"
import Card from "../components/Card"

const Transactions: BlitzPage = () => (
  <Grid maxCols={2}>
    <Card>dupa</Card>
    <Card>dupa</Card>
    <Card>dupa</Card>
    <Card>dupa</Card>
  </Grid>
)

Transactions.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default Transactions
