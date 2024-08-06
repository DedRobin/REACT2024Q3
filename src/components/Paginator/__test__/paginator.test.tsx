import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import { fireEvent, render } from "@testing-library/react";
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
  });

  test("<Paginator/> Page '3' should have disabled after clicking on it", () => {
    const fakeCount = 30;
    const fakeSearchParams = new URLSearchParams({ page: "5" });

    render(
      <MemoryRouter>
        <Paginator count={fakeCount} searchParams={fakeSearchParams} />,
      </MemoryRouter>,
    );
    const button = screen.getByText("3");
    fireEvent.click(button);

    expect(screen.getByText(/3/i)).toHaveStyle(
      "pointer-events: none; opacity: 0.4;",
    );
  });

  test("<Paginator/> Page '1' should be disabled by default", () => {
    const fakeCount = 30;
    const fakeSearchParams = new URLSearchParams({ page: "5" });

    render(
      <MemoryRouter>
        <Paginator count={fakeCount} searchParams={fakeSearchParams} />,
      </MemoryRouter>,
    );
    const button = screen.getByText("1");
    fireEvent.click(button);

    expect(screen.getByText(/1/i)).toHaveStyle(
      "pointer-events: none; opacity: 0.4;",
    );
  });
});
