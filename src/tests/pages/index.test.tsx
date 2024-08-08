import { afterAll, afterEach, beforeAll, expect, test, vi } from "vitest";
import { screen } from "@testing-library/react";
import { IndexPage } from "@/pages";
import { renderWithStoreProvider } from "../utils";
import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";
import { describe } from "node:test";

vi.mock("next/navigation", () => ({
  useSearchParams: vi.fn().mockReturnValue(() => new URLSearchParams("")),
  useRouter: vi.fn().mockReturnValue(() => {}),
}));

const mockPerson = {
  results: [
    {
      name: "Foo",
    },
  ],
};

export const mockHandler = http.get("https://swapi.dev/api/people", () => {
  return HttpResponse.json(mockPerson);
});

const server = setupServer(mockHandler);
describe("<IndexPage/> test", () => {
  beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
  afterAll(() => {
    vi.clearAllMocks();
    server.close();
  });
  afterEach(() => server.resetHandlers());

  test("IndexPage", () => {
    renderWithStoreProvider(<IndexPage />);
    expect(screen.getByText("Star Wars (People)")).toBeInTheDocument();
  });
});
