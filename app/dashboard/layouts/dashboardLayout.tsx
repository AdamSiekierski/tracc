import React, { ReactNode } from "react"
import Nav from "../components/Nav"

type DashboardLayoutProps = {
  children: ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="h-screen flex bg-gray-50">
      <Nav />
      <div className="flex-1 height-full p-4">{children}</div>
    </div>
  )
}

export default DashboardLayout
