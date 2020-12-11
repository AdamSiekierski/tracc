import React from "react"
import { BlitzPage } from "blitz"
import DashboardLayout from "../layouts/DashboardLayout"

const Stats: BlitzPage = () => <div>stats</div>

Stats.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default Stats
