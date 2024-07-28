import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import { screen } from "@testing-library/react";

import Result from "../index";
import { renderWithStoreProvider } from "../../../../tests/utils";
import { SwapiData } from "../../../store/apiSlice";

describe("<Result/> and its state", () => {
  test("<Result/> should be mounted", () => {
    const fakeResults: SwapiData[] = [
      {
        name: "name1",
        height: "height1",
        mass: "mass1",
        hairColor: "hair1",
        skinColor: "skin1",
        eyeColor: "eye1",
        birthday: "birthday1",
        gender: "gender1",
      },
      {
        name: "name2",
        height: "height2",
        mass: "mass2",
        hairColor: "hair2",
        skinColor: "skin2",
        eyeColor: "eye2",
        birthday: "birthday2",
        gender: "gender2",
      },
    ];

    renderWithStoreProvider(<Result results={fakeResults} />);

    expect(screen.getByText(/name1/i)).toBeInTheDocument();
    expect(screen.getByText(/name2/i)).toBeInTheDocument();
  });
});
