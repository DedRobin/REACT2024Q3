import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import ErrorPage from "..";

describe("<App/>", async () => {
  const testId = "error-testid";

  test("<ErrorPage/> should be mounted", () => {
    const { container } = render(
      <div data-testid={testId}>
        <ErrorPage />
      </div>,
    );
    const errorPage = container.querySelector(".error-page");

    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect((errorPage as Element).className).toContain("error-page");
  });
});
