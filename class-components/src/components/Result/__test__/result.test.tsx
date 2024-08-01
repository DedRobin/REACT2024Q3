import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import { screen } from "@testing-library/react";

import Result from "../index";
import { renderWithStoreProvider } from "../../../../tests/utils";
import { mockResults } from "./mockResults";

describe("<Result/> and its state", () => {
  test("<Result/> should be mounted", () => {
    renderWithStoreProvider(<Result results={mockResults} />);

    expect(screen.getByText(/name1/i)).toBeInTheDocument();
    expect(screen.getByText(/name2/i)).toBeInTheDocument();
  });
});
