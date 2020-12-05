import React, { ReactNode } from "react"

type DashboardLayoutProps = {
  children: ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return <div className="height-screen flex">{children}</div>
}

export default DashboardLayout
