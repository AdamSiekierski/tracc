import React from "react"
import NavLink from "./NavLink"
import { HomeIcon, SettingsIcon, StatsIcon } from "app/components/icons"

const Nav = () => {
  return (
    <nav className="h-full w-60 px-3 py-8 bg-purple-800 text-white">
      <h1 className="text-4xl font-bold mx-4 mb-8">tracc</h1>
      <NavLink to="/" icon={HomeIcon}>
        Dashboard
      </NavLink>
      <NavLink to="/stats" icon={StatsIcon}>
        Stats
      </NavLink>
      <NavLink to="/settings" icon={SettingsIcon}>
        Settings
      </NavLink>
    </nav>
  )
}

export default Nav
