import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./components/Data/slice";

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
