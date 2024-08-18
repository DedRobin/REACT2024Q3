import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./components/Data/slice";
import countryReducer from "./components/Form/Country/slice";

const store = configureStore({
  reducer: {
    data: dataReducer,
    country: countryReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
