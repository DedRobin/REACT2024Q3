import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import { screen } from "@testing-library/react";

import { renderWithRouterProvider } from "../../../tests/utils";
import ThemeSwitch from "../index";

describe("<Search/>", () => {
  test("<Search/> should be mounted", () => {
    renderWithRouterProvider(
      <div data-testid="theme-switchi">
        <ThemeSwitch onClick={() => {}} />;
      </div>,
    );

    expect(screen.getByTestId("theme-switchi")).toBeInTheDocument();
  });
});
