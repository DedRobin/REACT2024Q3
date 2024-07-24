import { createSlice } from "@reduxjs/toolkit";

export type ResultPayload = { name: string; selected: boolean };

const initialState: ResultPayload[] = [];

export const resultSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    resultAdded(state, action) {
      state.push(action.payload);
    },
    resultUpdated(state, action) {
      const { name, selected } = action.payload;
      const existingResult = state.find((result) => result.name === name);
      if (existingResult) {
        existingResult.selected = selected;
      }
    },
  },
});

export default resultSlice.reducer;
export const { resultAdded, resultUpdated } = resultSlice.actions;
