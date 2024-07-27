import { createSlice } from "@reduxjs/toolkit";

export type ResultPayload = { name: string };

const initialState: ResultPayload[] = [];

export const resultSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    resultAdded(state, action) {
      state.push(action.payload);
    },
    resultRemoved(state, action) {
      const { name } = action.payload;

      return state.filter((item) => item.name !== name);
    },
  },
});

export default resultSlice.reducer;
export const { resultAdded, resultRemoved } = resultSlice.actions;
