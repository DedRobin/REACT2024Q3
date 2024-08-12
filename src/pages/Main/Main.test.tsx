import "@testing-library/jest-dom";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Main from "./Main";

describe("<Main />", () => {
  test("Component should be mounted", () => {
    render(<Main />);

    expect(screen.getByText(/Main/i)).toBeInTheDocument();
  });
});
