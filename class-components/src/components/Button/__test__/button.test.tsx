import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";

import ErrorBoundary from "..";

describe("<ErrorBoundary/>", async () => {
  test("<ErrorBoundary/> should be mounted", () => {
    render(<ErrorBoundary children={<div>Test</div>} />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
