import { configureStore } from "@reduxjs/toolkit";

import resultReducer from "../components/Result/slice";

export const store = configureStore({
  reducer: {
    result: resultReducer,
  },
});
