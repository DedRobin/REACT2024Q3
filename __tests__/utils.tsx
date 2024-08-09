import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { AppStore, RootState, setupStore } from "../src/store/store";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: RootState;
  store?: AppStore;
}

export function renderWithStoreProvider(
  ui: React.ReactElement,
  {
    preloadedState = { results: [] },
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export function renderWithRouterProvider(ui: React.ReactElement) {
  const router = createMemoryRouter([
    {
      path: "/",
      element: ui,
    },
  ]);
  return render(<RouterProvider router={router} />);
}
