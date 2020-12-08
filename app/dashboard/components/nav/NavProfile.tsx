import React from "react"
import { useUser } from "../providers/UserProvider"

const NavProfile = () => {
  const user = useUser()

  console.log(user)

  return (
    <button className="p-2 flex items-center text-left appearance-none hover:bg-purple-700 transition-colors rounded-lg">
      <img
        src={`https://www.gravatar.com/avatar/${user?.emailHash}?d=mp`}
        alt=""
        className="rounded-full h-12"
      />
      <div className="px-4">
        <h3 className="font-bold">{user?.name}</h3>
        <p className="text-sm">{user?.email}</p>
      </div>
    </button>
  )
}

export default NavProfile
