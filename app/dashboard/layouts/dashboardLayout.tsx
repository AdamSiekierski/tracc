import React, { Suspense } from "react"
import Nav from "../components/nav/Nav"
import UserProvider from "../components/providers/UserProvider"

const DashboardLayout: React.FC = ({ children }) => {
  return (
    <Suspense fallback="Loading...">
      <UserProvider>
        <div className="h-screen flex bg-gray-100">
          <Nav />
          <div className="flex-1 height-full p-6">{children}</div>
        </div>
      </UserProvider>
    </Suspense>
  )
}

export default DashboardLayout
