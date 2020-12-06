import React, { ReactNode } from "react"

type AuthLayoutProps = {
  children: ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex flex-col justify-center items-center text-center h-screen bg-auto bg-gradient-to-br from-purple-800 to-blue-500">
      <h1 className="text-white text-5xl font-bold my-4">tracc</h1>
      <div className="max-w-md w-full bg-gray-50 px-16 py-10 rounded-xl">{children}</div>
    </div>
  )
}

export default AuthLayout
