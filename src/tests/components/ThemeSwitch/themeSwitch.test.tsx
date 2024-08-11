import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";

import ThemeSwitch from "@/components/ThemeSwitch";

describe("<Search/>", () => {
  test("<Search/> should be mounted", () => {
    render(
      <div data-testid="theme-switchi">
        <ThemeSwitch onClick={() => {}} />;
      </div>,
    );

    expect(screen.getByTestId("theme-switchi")).toBeInTheDocument();
  });
});
