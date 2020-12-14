import React, { ReactNode } from "react"

type GridProps = {
  children: ReactNode
  maxCols?: number
}

const Grid = ({ children, maxCols = 2 }: GridProps) => {
  return <section className={`grid grid-cols-${maxCols} gap-4 h-full`}>{children}</section>
}

export default Grid
