import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import { screen } from "@testing-library/react";
import { renderWithStoreProvider } from "../../utils";
import Results from "@/components/Results";
import { mockResults } from "./__mocks__/result";

describe("<Result/> and its state", () => {
  test("<Result/> should be mounted", () => {
    renderWithStoreProvider(<Results results={mockResults} />);

    expect(screen.getByText(/name1/i)).toBeInTheDocument();
    expect(screen.getByText(/name2/i)).toBeInTheDocument();
  });
});
