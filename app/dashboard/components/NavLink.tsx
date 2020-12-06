import React, { ComponentType, ReactText } from "react"
import { Link } from "blitz"
import { IconProps } from "app/components/icons"

type NavLinkProps = {
  children: ReactText
  icon: ComponentType<IconProps>
  to: string
}

const NavLink = ({ children, icon: Icon, to }: NavLinkProps) => {
  return (
    <Link href={to}>
      <a className="flex items-center hover:bg-purple-700 p-2 rounded-lg my-1">
        <Icon className="w-8 text-purple-500" />
        <p className="ml-3">{children}</p>
      </a>
    </Link>
  )
}

export default NavLink
