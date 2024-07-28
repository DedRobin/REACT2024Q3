import { describe, expect, test } from "vitest";
import resultReducer, {
  resultInitialState,
  resultAdded,
  resultRemoved,
  clearResult,
} from "../slice";

describe("Result Initial State", () => {
  test("Initial state", () => {
    const state = resultReducer(resultInitialState, { type: "unknown" });

    expect(state).toBe(resultInitialState);
  });

  test("Result added", () => {
    const payload = { name: "Foo" };
    const currentState = resultReducer(
      resultInitialState,
      resultAdded(payload),
    );

    expect(currentState[0]).toBe(payload);
  });

  test("Result removed", () => {
    const stateBeforeRemoving = [
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
    const stateAfterRemoving = [
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
    ];

    const payload = { name: "name2" };
    const currentState = resultReducer(
      stateBeforeRemoving,
      resultRemoved(payload),
    );

    expect(currentState).toStrictEqual(stateAfterRemoving);
  });

  test("Clear result", () => {
    const stateBeforeClearing = [
      {
        name: "name",
        height: "height",
        mass: "mass",
        hairColor: "hair",
        skinColor: "skin",
        eyeColor: "eye",
        birthday: "birthday",
        gender: "gender",
      },
    ];
    const currentState = resultReducer(stateBeforeClearing, clearResult());

    expect(currentState).toStrictEqual([]);
  });
});
