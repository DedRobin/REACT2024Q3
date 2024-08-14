import { createSlice } from "@reduxjs/toolkit";
import { TFormData } from "./types";

const initialState: TFormData = {
  name: "",
  age: "",
  email: "",
  password: "",
  gender: "",
  avatar: "",
  country: "",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateData(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export default dataSlice.reducer;
export const { updateData } = dataSlice.actions;
