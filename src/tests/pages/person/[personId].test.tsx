import { screen, waitFor } from "@testing-library/react";
import {
  afterAll,
  afterEach,
  assert,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test,
  vi,
} from "vitest";

import PersonPage from "@/pages/person/[personId]";
import mockServer from "@/mocks/server";
import { renderWithStoreProvider } from "@/tests/utils";
import { mockPersonId } from "@/mocks/data";

function mockHooks() {
  vi.mock("next/navigation", () => ({
    useSearchParams: vi.fn().mockReturnValue(new URLSearchParams("")),
    useRouter: () => ({
      push: vi.fn(),
    }),
  }));
}

describe("<PersonPage /> test", () => {
  beforeAll(() => mockServer.listen({ onUnhandledRequest: "error" }));
  beforeEach(() => {
    mockHooks();
  });
  afterAll(() => {
    vi.clearAllMocks();
    mockServer.close();
  });
  afterEach(() => mockServer.resetHandlers());

  test("<PersonPage /> should be mounted", async () => {
    const { container } = renderWithStoreProvider(
      <PersonPage personId={mockPersonId} />,
    );
    const loader = container.querySelector(".loader");
    assert(loader != null && loader.className === "loader");
    await waitFor(() => expect(container).toHaveTextContent("Foo1"));
    expect(screen.getByText(/Foo1$/i)).toBeInTheDocument();
  });
});
