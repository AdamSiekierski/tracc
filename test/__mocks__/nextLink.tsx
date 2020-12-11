import React from "react"
import { mockRouter } from "test/utils"
export * from "@testing-library/react"

jest.mock("next/Link", () => {
  return ({ children, href }) => (
    <div onClick={() => mockRouter.push(href)} aria-hidden="true">
      {children}
    </div>
  )
})
