import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import { screen } from "@testing-library/react";
import { renderWithStoreProvider } from "@/tests/utils";
import FlayoutElement from "@/components/FlayoutElement";

describe("<FlayoutElement/>", () => {
  const fakeData = {
    name: "name",
    height: "height",
    mass: "mass",
    hairColor: "hair",
    skinColor: "skin",
    eyeColor: "eye",
    birthday: "birthday",
    gender: "gender",
  };

  test("<FlayoutElement/> should be mounted", () => {
    renderWithStoreProvider(<FlayoutElement />, {
      preloadedState: { results: [fakeData] },
    });

    expect(screen.getByText("name")).toBeInTheDocument();
  });

  test("<UnselectAllButton/> should be mounted", () => {
    renderWithStoreProvider(<FlayoutElement />, {
      preloadedState: { results: [fakeData] },
    });

    expect(screen.getByText("Unselect All")).toBeInTheDocument();
  });

  test("<DownloadButton/> should be mounted", () => {
    renderWithStoreProvider(<FlayoutElement />, {
      preloadedState: { results: [fakeData] },
    });

    expect(screen.getByText("Download")).toBeInTheDocument();
  });
});
