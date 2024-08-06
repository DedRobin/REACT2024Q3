import { combineReducers, configureStore } from "@reduxjs/toolkit";

import resultReducer from "@/components/Results/slice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { starWarsApi } from "./apiSlice";

export const store = configureStore({
  reducer: {
    results: resultReducer,
    [starWarsApi.reducerPath]: starWarsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(starWarsApi.middleware),
});

export const rootReducer = combineReducers({
  results: resultReducer,
});

export function setupStore(preloadedState?: RootState) {
  if (preloadedState) {
    return configureStore({
      reducer: {
        results: resultReducer,
        [starWarsApi.reducerPath]: starWarsApi.reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(starWarsApi.middleware),
      preloadedState,
    });
  } else return store;
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

setupListeners(store.dispatch);
