import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Search from "@/components/Search";
import { beforeEach } from "node:test";

describe("<Search/>", () => {
  beforeEach(() => {
    vi.mock("next/navigation", async () => {
      const actual = await vi.importActual("next-router-mock");
      const useSearchParams = vi
        .fn()
        .mockImplementation(() => new URLSearchParams(""));
      return {
        ...actual,
        useSearchParams,
      };
    });
  });

  test("<Search/> should be mounted", () => {
    render(<Search />);

    expect(screen.getByText("Star Wars (People)")).toBeInTheDocument();
    expect(screen.getByText(/Search/i)).toBeInTheDocument();
  });
});
