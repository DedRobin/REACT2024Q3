import {
  afterAll,
  afterEach,
  assert,
  beforeAll,
  expect,
  test,
  vi,
} from "vitest";
import { screen, waitFor } from "@testing-library/react";

import { renderWithStoreProvider } from "../utils";
import { beforeEach, describe } from "node:test";
import mockServer from "../../mocks/server";
import IndexPage from "@/app/page";

describe("<IndexPage/> test", () => {
  beforeAll(() => mockServer.listen({ onUnhandledRequest: "error" }));
  beforeEach(() => {
    vi.mock("next/navigation", () => ({
      useSearchParams: vi.fn().mockReturnValue(new URLSearchParams("")),
      useRouter: () => ({
        push: vi.fn(),
      }),
    }));
  });
  afterAll(() => {
    vi.clearAllMocks();
    mockServer.close();
  });
  afterEach(() => mockServer.resetHandlers());

  test("<IndexPage /> is full mounted", async () => {
    const { container } = renderWithStoreProvider(<IndexPage />);
    const loader = container.querySelector(".loader");
    assert(loader != null && loader.className === "loader");
    await waitFor(() => expect(loader).not.toBeInTheDocument());
    expect(screen.getByText("Foo1")).toBeInTheDocument();
    expect(screen.getByText("Foo2")).toBeInTheDocument();
  });
});
