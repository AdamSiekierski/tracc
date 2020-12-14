import React from "react"
import Grid from "../Grid"
import { render } from "test/utils"
import { cleanup } from "@testing-library/react"

describe("grid/Grid", () => {
  const MockComponent = () => <div data-testid="mock-component" />

  afterEach(cleanup)

  it("renders given elements correctly", () => {
    const { getAllByTestId, asFragment } = render(
      <Grid>
        <MockComponent />
        <MockComponent />
      </Grid>
    )

    const allElements = getAllByTestId("mock-component")

    expect(allElements).toHaveLength(2)
    expect(asFragment()).toMatchSnapshot()
  })

  it("respects the max number of columns", () => {
    const { asFragment } = render(
      <Grid maxCols={1}>
        <MockComponent />
        <MockComponent />
      </Grid>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
