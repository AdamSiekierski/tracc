import React from "react"
import Button from "../Button"
import { cleanup, fireEvent } from "@testing-library/react"
import { render } from "test/utils"

describe("Button", () => {
  const MockIcon = (props) => (
    <div {...props} data-testid="mock-icon">
      icon
    </div>
  )

  afterEach(cleanup)

  it("renders properly", () => {
    const wrapper = render(<Button data-testid="button">hello world</Button>)

    expect(wrapper.getByTestId("button")).toHaveTextContent("hello world")
    expect(wrapper.asFragment()).toMatchSnapshot()
  })

  it("calls onClick when clicked", () => {
    const onClick = jest.fn()

    const wrapper = render(<Button data-testid="button" onClick={onClick} />)

    fireEvent.click(wrapper.getByTestId("button"))

    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onClick).toHaveBeenCalled()
  })

  it("shows the icon if passed", () => {
    const { getByTestId, asFragment } = render(<Button icon={MockIcon}>hello world</Button>)

    expect(getByTestId("mock-icon")).toBeInTheDocument()
    expect(getByTestId("mock-icon")).toHaveTextContent("icon")
    expect(asFragment()).toMatchSnapshot()
  })
})
