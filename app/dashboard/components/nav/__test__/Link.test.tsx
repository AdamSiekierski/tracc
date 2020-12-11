import { IconType } from "app/components/icons"
import { fireEvent, mockRouter, render } from "test/utils"
import { act } from "react-dom/test-utils"
import Link from "../Link"

describe("nav/Link", () => {
  const IconMock: IconType = () => <svg data-testid="icon-svg"></svg>
  const linkText = "hello world"

  test("renders given text and icon", () => {
    const { getByTestId } = render(
      <Link icon={IconMock} to="/path">
        {linkText}
      </Link>
    )

    expect(getByTestId("link-text")).toBeInTheDocument()
    expect(getByTestId("link-text")).toHaveTextContent(linkText)
    expect(getByTestId("icon-svg")).toBeInTheDocument()
  })

  test("redirects to given path", () => {
    const { getByTestId } = render(
      <Link icon={IconMock} to="/path">
        {linkText}
      </Link>
    )

    act(() => {
      fireEvent.click(getByTestId("link-wrapper"))
    })

    expect(mockRouter.push).toHaveBeenCalledTimes(1)
    expect(mockRouter.push).toHaveBeenCalledWith("/path", expect.anything(), expect.anything())
  })
})
