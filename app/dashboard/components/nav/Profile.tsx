import React, { useEffect, useRef, useState } from "react"
import { UpIcon } from "app/components/icons"
import { useUser } from "../providers/UserProvider"
import ProfileMenu from "./ProfileMenu"
import { show } from "cli-cursor"

const NavProfile = () => {
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const user = useUser()

  useEffect(() => {
    function hideListener(e: MouseEvent) {
      const menu = menuRef.current
      const button = menuRef.current
      const target = e.target as Element

      if (showMenu && target !== menu && target !== button) {
        setShowMenu(false)
      }
    }

    document.addEventListener("click", hideListener)

    return () => {
      document.removeEventListener("click", hideListener)
    }
  })

  return (
    <div className={`relative`}>
      <button
        className={`p-2 flex w-full items-center relative text-left transition-all group outline-none focus:outline-none ${
          showMenu
            ? "bg-gray-100 text-black rounded-b-lg"
            : "bg-transparent hover:bg-purple-700 rounded-lg focus:bg-purple-700"
        }`}
        onClick={() => setShowMenu(!showMenu)}
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
        <div className={`${!showMenu && "text-transparent group-hover:text-white"}`}>
          <UpIcon className={`w-8 transform transition-transform ${showMenu && "rotate-180"}`} />
        </div>
      </button>
      <ProfileMenu ref={menuRef} show={showMenu} />
    </div>
  )
}

export default NavProfile
