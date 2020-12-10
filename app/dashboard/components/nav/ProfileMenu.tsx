import React from "react"

type ProfileMenuProps = {
  show: boolean
}

const ProfileMenu = React.forwardRef<HTMLDivElement, ProfileMenuProps>(({ show }, ref) => {
  return (
    <div
      ref={ref}
      className={`absolute w-full bottom-full left-0 bg-gray-100 rounded-t-lg p-2 transition-all border-b border-gray-300 ${
        !show && "opacity-0 invisible"
      }`}
    >
      dupa
    </div>
  )
})

export default ProfileMenu
