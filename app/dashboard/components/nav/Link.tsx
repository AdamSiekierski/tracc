import React, { ReactText } from "react"
import { Link, useRouter } from "blitz"
import { IconType } from "app/components/icons"

type NavLinkProps = {
  children: ReactText
  icon: IconType
  to: string
}

const NavLink = ({ children, icon: Icon, to }: NavLinkProps) => {
  const router = useRouter()

  return (
    <Link href={to} passHref>
      <a
        className={`flex items-center p-2 rounded-lg my-1 transition-colors duration-200 ${
          router.pathname === to && "bg-purple-700"
        }  hover:bg-purple-700`}
      >
        <Icon className="w-8 text-purple-500" />
        <p className="ml-3">{children}</p>
      </a>
    </Link>
  )
}

export default NavLink
