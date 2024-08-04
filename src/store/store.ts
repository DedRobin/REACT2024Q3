import { combineReducers, configureStore } from "@reduxjs/toolkit";

import resultReducer from "../app/components/Result/slice";
import { starWarsApi } from "../store/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

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
