import { IconType } from "app/components/icons"
import { cleanup, fireEvent, mockRouter, render } from "test/utils"
import { act } from "@testing-library/react"
import Link from "../Link"

describe("nav/Link", () => {
  const IconMock: IconType = () => <svg data-testid="icon-svg"></svg>
  const linkText = "hello world"

  let wrapper: ReturnType<typeof render>

  beforeEach(() => {
    wrapper = render(
      <Link icon={IconMock} to="/path">
        {linkText}
      </Link>
    )
  })

  afterEach(cleanup)

  it("renders given text and icon", () => {
    const { getByTestId } = wrapper

    expect(getByTestId("link-text")).toBeInTheDocument()
    expect(getByTestId("link-text")).toHaveTextContent(linkText)
    expect(getByTestId("icon-svg")).toBeInTheDocument()
  })

  it("passes proper url to link", () => {
    const { getByTestId } = wrapper

    act(() => {
      fireEvent.click(getByTestId("link-wrapper"))
    })

    expect(mockRouter.push).toHaveBeenCalledTimes(1)
    expect(mockRouter.push).toHaveBeenCalledWith("/path")
  })
})
