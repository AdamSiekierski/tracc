import React, { Suspense } from "react"
import Nav from "../components/Nav"

const DashboardLayout: React.FC = ({ children }) => {
  return (
    <div className="h-screen flex bg-gray-50">
      <Nav />
      <div className="flex-1 height-full p-4">
        <Suspense fallback="Loading...">{children}</Suspense>
      </div>
    </div>
  )
}

export default DashboardLayout
