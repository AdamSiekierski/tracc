import React from "react"
import { useLogout } from "app/auth/hooks/useLogout"

type MenuItemProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const MenuItem: React.FC<MenuItemProps> = ({ children, ...props }) => (
  <button
    className={`block apperance-none py-2 px-4 border-b border-gray-300 w-full text-left font-semibold transition-colors hover:bg-gray-200`}
    {...props}
  >
    {children}
  </button>
)

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
    </div>
  )
})

export default ProfileMenu
