import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import { screen } from "@testing-library/react";
import App from "..";
import { renderWithStoreProvider } from "../../../tests/utils";

describe("<App/>", async () => {
  test("<App/> should be mounted", () => {
    renderWithStoreProvider(
      <div data-testid="app-testid">
        <App />
      </div>,
    );
    expect(screen.getByTestId("app-testid")).toBeInTheDocument();
  });
});
