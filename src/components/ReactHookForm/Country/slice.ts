import { createSlice } from "@reduxjs/toolkit";
import country from "country-list-js";

const initialState: string[] = country.names();

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {},
});

export default countrySlice.reducer;
