import { configureStore } from "@reduxjs/toolkit";

import searchParamsLoader from "../components/Result/slice";
import { starWarsApi } from "../store/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    results: searchParamsLoader,
    [starWarsApi.reducerPath]: starWarsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(starWarsApi.middleware),
});

setupListeners(store.dispatch);
