import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";

import ThrowErrorButton from "..";

describe("<ThrowErrorButton/>", () => {
  test("<ThrowErrorButton/> should be mounted", () => {
    render(<ThrowErrorButton />);
    expect(screen.getByText("Throw an Error")).toBeInTheDocument();
  });
});
