import { Suspense } from "react"
import { BlitzPage, Router, useMutation } from "blitz"
import { getSessionContext } from "@blitzjs/server"
import logout from "app/auth/mutations/logout"
import remove from "app/auth/mutations/remove"
import { useCurrentUser } from "app/hooks/useCurrentUser"
import DashboardLayout from "../layouts/dashboardLayout"

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)
  const [removeMutation] = useMutation(remove)

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

const Home: BlitzPage = () => {
  return (
    <Suspense fallback="Loading...">
      <UserInfo />
    </Suspense>
  )
}

export async function getServerSideProps({ req, res }) {
  const session = await getSessionContext(req, res)

  if (!session.userId) {
    res.setHeader("location", "/login")
    res.statusCode = 302
    res.end()
  }

  return { props: {} }
}

Home.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default Home
