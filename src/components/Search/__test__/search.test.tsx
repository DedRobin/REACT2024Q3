import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import { screen } from "@testing-library/react";

import Search from "../index";
import { renderWithRouterProvider } from "../../../../__tests__/utils";

describe("<Search/>", () => {
  test("<Search/> should be mounted", () => {
    renderWithRouterProvider(<Search />);

    expect(screen.getByText("Star Wars (People)")).toBeInTheDocument();
    expect(screen.getByText(/Search/i)).toBeInTheDocument();
  });
});
