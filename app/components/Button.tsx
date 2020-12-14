import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"
import { IconType } from "./icons"

type ButtonProps = {
  children?: ReactNode
  variant?: "full" | "outlined"
  icon?: IconType
} & DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button = ({ children, variant, icon: Icon, ...props }: ButtonProps) => {
  let style: string
  switch (variant) {
    case "full":
      style = "bg-gray-200 hover:bg-gray-300"
      break
    case "outlined":
      style = "bg-gray-50 hover:bg-gray-100 border border-gray-200"
      break
    default:
      style = "bg-gray-200 hover:bg-gray-300"
      break
  }

  return (
    <button
      className={`block rounded-md px-4 py-2 text-gray-600 transition-colors duration-300 ${style}`}
      {...props}
    >
      {Icon && <Icon className="w-8 text-gray-300" />}
      {children}
    </button>
  )
}

export default Button
