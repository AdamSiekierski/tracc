import React from "react"
import { useCurrentUser } from "app/hooks/useCurrentUser"

const UserContext = React.createContext<ReturnType<typeof useCurrentUser>>(null)

const UserProvider: React.FC = ({ children }) => {
  const user = useCurrentUser()

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

export const useUser = () => {
  return React.useContext(UserContext)
}

export default UserProvider
