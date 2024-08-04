"use client";

import { SyntheticEvent, useCallback, useState } from "react";
import { Provider } from "react-redux";

import { Theme, ThemeContex } from "../views/Main/contex";
import { store } from "../store/store";
import ThemeSwitch from "./components/ThemeSwitch";
import MainPage from "../views/Main";

export default function App() {
  const [theme, setTheme] = useState<Theme>("light");

  const switchTheme = useCallback((event: SyntheticEvent) => {
    const { currentTarget } = event;
    if (currentTarget instanceof HTMLElement) {
      if (currentTarget.className.includes("dark")) setTheme("light");
      else setTheme("dark");
    }
  }, []);

  return (
    <Provider store={store}>
      <div className={theme === "light" ? "app light" : "app dark"}>
        <ThemeContex.Provider value={theme}>
          <ThemeSwitch onClick={switchTheme} />
          <MainPage />
        </ThemeContex.Provider>
      </div>
    </Provider>
  );
}
