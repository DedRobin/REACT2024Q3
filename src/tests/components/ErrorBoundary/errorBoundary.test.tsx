import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import Button from "@/components/Button";

describe("<Button/>", () => {
  test("<Button/> should be mounted", () => {
    render(<Button className="Test" type="button" children="Button Test" />);
    expect(screen.getByText("Button Test")).toBeInTheDocument();
  });
});
