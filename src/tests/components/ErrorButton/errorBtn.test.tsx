import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import ThrowErrorButton from "@/components/ErrorButton";
import ErrorBoundary from "@/components/ErrorBoundary";

describe("<ThrowErrorButton/>", () => {
  test("<ThrowErrorButton/> should be mounted", () => {
    render(<ThrowErrorButton />);
    expect(screen.getByText(/Throw an Error/i)).toBeInTheDocument();
  });

  test("<ThrowErrorButton/> should throw error", () => {
    render(
      <ErrorBoundary>
        <ThrowErrorButton />
      </ErrorBoundary>,
    );
    const button = screen.getByText(/Throw an Error/i);

    fireEvent.click(button);

    expect(
      screen.getByText(
        "Hi. I'm 'ThrowErrorButton' component. This error was issued by me.",
      ),
    ).toBeInTheDocument();
  });
});
