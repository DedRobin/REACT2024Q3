import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import { screen } from "@testing-library/react";
import Results from "@/components/Results";
import { renderWithStoreProvider } from "@/tests/utils";
import { mockPeople } from "@/mocks/data";

describe("<Result/> and its state", () => {
  test("<Result/> should be mounted", () => {
    renderWithStoreProvider(<Results results={mockPeople.results} />);

    expect(screen.getByText("Foo1")).toBeInTheDocument();
    expect(screen.getByText("Foo2")).toBeInTheDocument();
  });
});
