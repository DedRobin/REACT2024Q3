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
  reducers: {},
});

export default dataSlice.reducer;
// export const { receiveData } = dataSlice.actions;
