import React from "react"
import { BlitzPage } from "blitz"
import DashboardLayout from "../layouts/DashboardLayout"

const Settings: BlitzPage = () => <div>setings</div>

Settings.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default Settings
