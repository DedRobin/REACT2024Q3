import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import { screen } from "@testing-library/react";
import FlayoutElement from "..";
import { renderWithStoreProvider } from "../../../../tests/utils";

describe("<FlayoutElement/>", () => {
  test("<FlayoutElement/> should be mounted", () => {
    renderWithStoreProvider(<FlayoutElement />, {
      preloadedState: { results: [{ name: "Foo" }] },
    });

    expect(screen.getByText("Foo")).toBeInTheDocument();
  });
});
