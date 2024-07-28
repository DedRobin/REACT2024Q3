import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Paginator from "../index";

describe("<Paginator/>", async () => {
  test("<Paginator/> should be mounted", () => {
    const fakeCount = 30;
    const fakeSearchParams = new URLSearchParams({ page: "5" });
    const { getByText, queryByText, queryAllByRole } = render(
      <MemoryRouter>
        <Paginator count={fakeCount} searchParams={fakeSearchParams} />,
      </MemoryRouter>,
    );

    expect(queryAllByRole("link").length).toEqual(
      Math.floor(fakeCount / 10) + 2,
    );
    expect(getByText(/1/i)).toBeInTheDocument();
    expect(getByText(/2/i)).toBeInTheDocument();
    expect(getByText(/3/i)).toBeInTheDocument();
    expect(queryByText(/4/i)).not.toBeInTheDocument();
    // expect(getByText(/bar/i)).toBeInTheDocument();
  });
});
