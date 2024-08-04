import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import ErrorBoundary from "../../ErrorBoundary";

describe("<ErrorBoundary/>", async () => {
  test("<ErrorBoundary/> should be mounted", () => {
    render(
      <ErrorBoundary>
        <div>Test</div>
      </ErrorBoundary>,
    );
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
