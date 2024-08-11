import Custom404 from "@/app/404";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

describe("<Custom404 /> test", () => {
  test("<Custom404 /> should be mounted", async () => {
    render(<Custom404 />);
    expect(screen.getByText(/Error 404/i)).toBeInTheDocument();
  });
});
