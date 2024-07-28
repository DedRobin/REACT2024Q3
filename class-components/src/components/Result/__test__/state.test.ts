import { describe, expect, it } from "vitest";
import resultReducer, {
  resultInitialState,
  resultAdded,
  resultRemoved,
  clearResult,
} from "../slice";

describe("Result Initial State", () => {
  it("Initial state", () => {
    const state = resultReducer(resultInitialState, { type: "unknown" });

    expect(state).toBe(resultInitialState);
  });

  it("Result added", () => {
    const payload = { name: "Foo" };
    const currentState = resultReducer(
      resultInitialState,
      resultAdded(payload),
    );

    expect(currentState[0]).toBe(payload);
  });

  it("Result removed", () => {
    const stateBeforeRemoving = [
      { name: "Foo" },
      { name: "Bar" },
      { name: "Extra" },
    ];
    const stateAfterRemoving = [{ name: "Foo" }, { name: "Bar" }];
    const payload = { name: "Extra" };
    const currentState = resultReducer(
      stateBeforeRemoving,
      resultRemoved(payload),
    );

    expect(currentState).toStrictEqual(stateAfterRemoving);
  });

  it("Clear result", () => {
    const stateBeforeClearing = [{ name: "Foo" }, { name: "Bar" }];
    const currentState = resultReducer(stateBeforeClearing, clearResult());

    expect(currentState).toStrictEqual([]);
  });
});
