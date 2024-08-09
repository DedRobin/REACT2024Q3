import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render } from "@testing-library/react";
import Loader from "@/components/Loader";

describe("<Loader/>", async () => {
  test("<Loader/> should be mounted", () => {
    const { container } = render(<Loader />);

    expect(container.firstChild).toBeInstanceOf(HTMLElement);
    if (container.firstChild instanceof HTMLElement) {
      expect(container.firstChild).toBeInTheDocument();
    }
  });
});
