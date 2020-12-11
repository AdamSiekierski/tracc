import { useMutation, useRouter } from "blitz"
import logout from "../mutations/logout"

export function useLogout() {
  const [logoutMutation] = useMutation(logout)
  const router = useRouter()

  return () => {
    logoutMutation().then(() => {
      router.push("/login")
    })
  }
}
