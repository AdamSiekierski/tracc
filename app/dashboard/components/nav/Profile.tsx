import React, { useEffect, useRef, useState } from "react"
import { UpIcon } from "app/components/icons"
import { useUser } from "../providers/UserProvider"
import ProfileMenu from "./ProfileMenu"

const NavProfile = () => {
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef(null)
  const user = useUser()

  useEffect(() => {
    function hideListener(e: MouseEvent) {
      if (e.target !== menuRef.current && showMenu) {
        setShowMenu(false)
      }
    }

    document.addEventListener("click", hideListener)

    return () => {
      document.removeEventListener("click", hideListener)
    }
  })

  return (
    <button
      className={`p-2 flex items-center relative text-left appearance-none transition-all group focus:outline-none ${
        showMenu
          ? "bg-gray-100 text-black rounded-b-lg"
          : "bg-transparent hover:bg-purple-700 rounded-lg"
      }`}
      onClick={() => !showMenu && setShowMenu(true)}
    >
      <img
        src={`https://www.gravatar.com/avatar/${user?.emailHash}?d=mp`}
        alt=""
        className="rounded-full h-12"
      />
      <div className="px-4 flex-1">
        <h3 className="font-bold">{user?.name}</h3>
        <p className="text-sm">{user?.email}</p>
      </div>
      <div
        className={`${!showMenu && "text-transparent group-hover:text-white"} transition-colors`}
      >
        <UpIcon className={`w-8 transform transition-transform ${showMenu && "rotate-180"}`} />
      </div>
      <ProfileMenu ref={menuRef} show={showMenu} />
    </button>
  )
}

export default NavProfile
