import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";

import Result from "../index";
import { renderWithProviders } from "../../../../tests/utils";
import { SwapiData } from "../../../store/apiSlice";

describe("<Result/> and its state", async () => {
  test("<Result/> should be mounted", () => {
    const fakeResults: SwapiData[] = [{ name: "Foo" }, { name: "Bar" }];

    const { getByText } = renderWithProviders(<Result results={fakeResults} />);
    expect(getByText(/foo/i)).toBeInTheDocument();
    expect(getByText(/bar/i)).toBeInTheDocument();
  });
});
