import React from "react"
import { BlitzPage, Router, useMutation } from "blitz"
import logout from "app/auth/mutations/logout"
import remove from "app/auth/mutations/remove"
import DashboardLayout from "../layouts/DashboardLayout"
import { useUser } from "../components/providers/UserProvider"

const Home: BlitzPage = () => {
  const [logoutMutation] = useMutation(logout)
  const [removeMutation] = useMutation(remove)
  const currentUser = useUser()

  return (
    <>
      <button
        onClick={async () => {
          await logoutMutation()
          Router.push("/login")
        }}
      >
        Logout
      </button>
      <button
        onClick={async () => {
          await removeMutation()
          Router.push("/login")
        }}
      >
        Remove account
      </button>
      <div>
        User id: <code>{currentUser?.id}</code>
        <br />
        User name: <code>{currentUser?.name}</code>
        <br />
        User email: <code>{currentUser?.email}</code>
      </div>
    </>
  )
}

Home.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default Home
