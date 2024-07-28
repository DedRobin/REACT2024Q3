import { createSlice } from "@reduxjs/toolkit";

export type ResultPayload = {
  name: string;
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthday: string;
  gender: string;
};

export const resultInitialState: ResultPayload[] = [];

export const resultSlice = createSlice({
  name: "results",
  initialState: resultInitialState,
  reducers: {
    resultAdded(state, action) {
      state.push(action.payload);
    },
    resultRemoved(state, action) {
      const { name } = action.payload;

      return state.filter((person) => person.name !== name);
    },
    clearResult(state) {
      return state.filter(() => false);
    },
  },
});

export default resultSlice.reducer;
export const { resultAdded, resultRemoved, clearResult } = resultSlice.actions;
