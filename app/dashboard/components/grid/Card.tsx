import React, { ReactNode } from "react"

type CardProps = {
  children: ReactNode
}

const Card = ({ children }: CardProps) => (
  <div className="rounded-xl shadow-md bg-gray-50 overflow-y-auto">{children}</div>
)

export default Card
