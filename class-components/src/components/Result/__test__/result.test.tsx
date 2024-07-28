import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import { http, HttpResponse, delay } from "msw";

import Result from "../index";
import { renderWithProviders } from "../../../../tests/utils";
import { SwapiData } from "../../../store/apiSlice";

export const handlers = [
  http.get("/api/result", async () => {
    await delay(150);
    return HttpResponse.json([{ name: "Foo" }, { name: "Bar" }]);
  }),
];

describe("Testing Home Page", async () => {
  test("should renders home component", () => {
    const results: SwapiData[] = [{ name: "Foo" }, { name: "Bar" }];

    const { getByText } = renderWithProviders(<Result results={results} />);
    expect(getByText(/foo/i)).toBeInTheDocument();
    expect(getByText(/bar/i)).toBeInTheDocument();
  });
});
