import React from "react"
import { useLogout } from "app/hooks/useLogout"
import { Link } from "@blitzjs/core"

type MenuItemProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  href?: string
}

const MenuItem: React.FC<MenuItemProps> = ({ children, href, ...props }) => {
  if (href) {
    return (
      <Link href={href} passHref>
        <a
          className={`block apperance-none py-2 px-4 border-b border-gray-300 w-full text-left font-semibold transition-colors hover:bg-gray-200`}
        >
          {children}
        </a>
      </Link>
    )
  }

  return (
    <button
      className={`block apperance-none py-2 px-4 border-b border-gray-300 w-full text-left font-semibold transition-colors hover:bg-gray-200`}
      {...props}
    >
      {children}
    </button>
  )
}

type ProfileMenuProps = {
  show: boolean
}

const ProfileMenu = React.forwardRef<HTMLDivElement, ProfileMenuProps>(({ show }, ref) => {
  const logout = useLogout()

  return (
    <div
      ref={ref}
      className={`absolute w-full bottom-full left-0 bg-gray-100 rounded-t-lg transition-all overflow-hidden text-black ${
        !show && "opacity-0 invisible"
      }`}
    >
      <MenuItem onClick={logout}>Logout</MenuItem>
      <MenuItem href="/settings">Settings</MenuItem>
    </div>
  )
})

export default ProfileMenu
