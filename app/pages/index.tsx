import { BlitzPage, useMutation } from "blitz"
import { getSessionContext } from "@blitzjs/server"
import logout from "app/auth/mutations/logout"
import { useCurrentUser } from "app/hooks/useCurrentUser"
import { Suspense } from "react"

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  return (
    <>
      <button
        onClick={async () => {
          await logoutMutation()
        }}
      >
        Logout
      </button>
      <div>
        User id: <code>{currentUser?.id}</code>
        <br />
        User role: <code>{currentUser?.role}</code>
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

export default Home
