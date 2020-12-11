import React from "react"
import { RouterContext, BlitzRouter } from "blitz"
import { render as defaultRender } from "@testing-library/react"
import { renderHook as defaultRenderHook } from "@testing-library/react-hooks"

export * from "@testing-library/react"

export function render(ui: RenderUI, { wrapper, router, ...options }: RenderOptions = {}) {
  if (!wrapper) {
    wrapper = ({ children }) => (
      <RouterContext.Provider value={{ ...mockRouter, ...router }}>
        {children}
      </RouterContext.Provider>
    )
  }
  return defaultRender(ui, { wrapper, ...options })
}
export function renderHook(
  hook: RenderHook,
  { wrapper, router, ...options }: RenderHookOptions = {}
) {
  if (!wrapper) {
    // Add a default context wrapper if one isn't supplied from the test
    wrapper = ({ children }) => (
      <RouterContext.Provider value={{ ...mockRouter, ...router }}>
        {children}
      </RouterContext.Provider>
    )
  }
  return defaultRenderHook(hook, { wrapper, ...options })
}

export const mockRouter: BlitzRouter = {
  basePath: "",
  pathname: "/",
  route: "/",
  asPath: "/",
  params: {},
  query: {},
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
}

type DefaultParams = Parameters<typeof defaultRender>
type RenderUI = DefaultParams[0]
type RenderOptions = DefaultParams[1] & { router?: Partial<BlitzRouter> }

type DefaultHookParams = Parameters<typeof defaultRenderHook>
type RenderHook = DefaultHookParams[0]
type RenderHookOptions = DefaultHookParams[1] & { router?: Partial<BlitzRouter> }
