import { afterAll, beforeAll, describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import { fireEvent, render } from "@testing-library/react";
import { screen } from "@testing-library/react";

import { afterEach } from "node:test";
import Paginator from "@/components/Paginator";
import mockServer from "@/mocks/server";

import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

vi.mock("next/navigation", () => ({
  useSearchParams: vi.fn().mockReturnValue(new URLSearchParams("")),
}));

describe("<Paginator/>", () => {
  beforeAll(() => {
    mockServer.listen();
  });
  afterAll(() => {
    mockServer.close();
  });
  afterEach(() => mockServer.resetHandlers());

  test("<Paginator/> should be mounted", () => {
    const fakeCount = 30;

    render(<Paginator count={fakeCount} refetchResult={vi.fn} />, {
      wrapper: MemoryRouterProvider,
    });

    expect(screen.queryAllByRole("link").length).toEqual(
      Math.floor(fakeCount / 10) + 2,
    );
    expect(screen.getByText(/1/i)).toBeInTheDocument();
    expect(screen.getByText(/2/i)).toBeInTheDocument();
    expect(screen.getByText(/3/i)).toBeInTheDocument();
    expect(screen.queryByText(/4/i)).not.toBeInTheDocument();
  });

  test("<Paginator/> Page '3' should have disabled after clicking on it", () => {
    const fakeCount = 30;

    render(<Paginator count={fakeCount} refetchResult={vi.fn} />, {
      wrapper: MemoryRouterProvider,
    });
    const button = screen.getByText("3");
    fireEvent.click(button);

    expect(screen.getByText(/3/i)).toHaveStyle(
      "pointer-events: none; opacity: 0.4;",
    );
  });

  test("<Paginator/> Page '1' should be disabled by default", () => {
    const fakeCount = 30;

    render(<Paginator count={fakeCount} refetchResult={vi.fn} />, {
      wrapper: MemoryRouterProvider,
    });

    const button = screen.getByText("1");
    fireEvent.click(button);

    expect(screen.getByText(/1/i)).toHaveStyle(
      "pointer-events: none; opacity: 0.4;",
    );
  });
});
