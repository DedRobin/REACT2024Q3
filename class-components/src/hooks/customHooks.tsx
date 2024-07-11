import { useState } from "react";

type localStorageState = [string, (value: string) => void];

export const useLocalStorage = (initialState: string): localStorageState => {
  const [state, setState] = useState(initialState);

  const handler = (value: string) => {
    localStorage.setItem("dedrobin-REACT2024Q3-search-term", value);
    setState(value);
  };

  return [state, handler];
};
