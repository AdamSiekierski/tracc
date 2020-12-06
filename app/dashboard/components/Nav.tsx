import React from "react"
import NavLink from "./NavLink"
import { HomeIcon, StatsIcon } from "app/components/icons"

const Nav = () => {
  return (
    <nav className="h-full w-60 px-3 py-8 bg-purple-800 text-white">
      <h1 className="text-4xl font-bold mx-4 mb-8">tracc</h1>
      <NavLink to="/" icon={HomeIcon}>
        Dashboard
      </NavLink>
      <NavLink to="/" icon={StatsIcon}>
        Stats
      </NavLink>
    </nav>
  )
}

export default Nav
