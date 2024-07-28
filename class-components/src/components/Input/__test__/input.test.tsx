import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";

import Input from "../index";

describe("<Input/>", async () => {
  test("<Input/> should be mounted", () => {
    render(<Input className="test" name="foo" defaultValue="bar" />);

    expect(screen.getByDisplayValue("bar")).toBeInTheDocument();
  });
});
