import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import { screen } from "@testing-library/react";

import Result from "../index";
import { renderWithStoreProvider } from "../../../../tests/utils";
import { SwapiData } from "../../../store/apiSlice";

describe("<Result/> and its state", () => {
  test("<Result/> should be mounted", () => {
    const fakeResults: SwapiData[] = [{ name: "Foo" }, { name: "Bar" }];

    renderWithStoreProvider(<Result results={fakeResults} />);

    expect(screen.getByText(/foo/i)).toBeInTheDocument();
    expect(screen.getByText(/bar/i)).toBeInTheDocument();
  });
});
