import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import { fireEvent, screen } from "@testing-library/react";
import App from "..";
import { renderWithStoreProvider } from "../../../tests/utils";

describe("<App/>", async () => {
  const testId = "app-testid";

  test("<App/> should be mounted", () => {
    renderWithStoreProvider(
      <div data-testid={testId}>
        <App />
      </div>,
    );
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  test("Switch theme", () => {
    const { container } = renderWithStoreProvider(
      <div data-testid={testId}>
        <App />
      </div>,
    );
    const button = container.querySelector(".theme-switch");
    if (button) fireEvent.click(button);

    const app = container.querySelector(".app");
    expect(app).toBeInTheDocument();
    expect((app as Element).className).toBe("app dark");
  });
});
