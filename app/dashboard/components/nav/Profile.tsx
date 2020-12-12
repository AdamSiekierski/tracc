import React, { useEffect, useRef, useState } from "react"
import { UpIcon } from "app/components/icons"
import { useUser } from "../providers/UserProvider"
import ProfileMenu from "./ProfileMenu"

const NavProfile = () => {
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const user = useUser()

  useEffect(() => {
    function hideListener(e: MouseEvent) {
      const menu = menuRef.current
      const target = e.target as Element

      if (showMenu && !(menu?.contains(target) || target === menu)) {
        setShowMenu(false)
      }
    }

    document.addEventListener("click", hideListener)

    return () => {
      document.removeEventListener("click", hideListener)
    }
  })

  return (
    <div
      className={`p-2 flex items-center relative text-left transition-all group outline-none focus:outline-none ${
        showMenu
          ? "bg-gray-100 text-black rounded-b-lg"
          : "bg-transparent hover:bg-purple-700 rounded-lg"
      }`}
      onClick={() => !showMenu && setShowMenu(true)}
      tabIndex={0}
      role="button"
      onKeyUp={(e) => !(e.target === menuRef.current) && setShowMenu(!menuRef)}
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
      <ProfileMenu ref={menuRef} show={showMenu} />
    </div>
  )
}

export default NavProfile
