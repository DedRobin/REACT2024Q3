import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { screen } from "@testing-library/react";

import Paginator from "../index";

describe("<Paginator/>", () => {
  test("<Paginator/> should be mounted", () => {
    const fakeCount = 30;
    const fakeSearchParams = new URLSearchParams({ page: "5" });

    render(
      <MemoryRouter>
        <Paginator count={fakeCount} searchParams={fakeSearchParams} />,
      </MemoryRouter>,
    );

    expect(screen.queryAllByRole("link").length).toEqual(
      Math.floor(fakeCount / 10) + 2,
    );
    expect(screen.getByText(/1/i)).toBeInTheDocument();
    expect(screen.getByText(/2/i)).toBeInTheDocument();
    expect(screen.getByText(/3/i)).toBeInTheDocument();
    expect(screen.queryByText(/4/i)).not.toBeInTheDocument();
    // expect(getByText(/bar/i)).toBeInTheDocument();
  });
});
