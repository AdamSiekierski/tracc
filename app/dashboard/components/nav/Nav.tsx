import React from "react"
import NavLink from "./Link"
import { HomeIcon, SettingsIcon, StatsIcon } from "app/components/icons"
import NavProfile from "./Profile"

const Nav = () => {
  return (
    <nav className="h-full w-72 p-3 flex flex-col bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white">
      <div className="flex-1 overflow-auto">
        <h1 className="text-4xl font-bold mx-4 mb-8 mt-5">tracc</h1>
        <NavLink to="/" icon={HomeIcon}>
          Dashboard
        </NavLink>
        <NavLink to="/stats" icon={StatsIcon}>
          Stats
        </NavLink>
        <NavLink to="/settings" icon={SettingsIcon}>
          Settings
        </NavLink>
      </div>
      <NavProfile />
    </nav>
  )
}

export default Nav
