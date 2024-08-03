import { SyntheticEvent, useCallback, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "../views/root";
import { Provider } from "react-redux";

import "./style.css";
import ThemeSwitch from "../components/ThemeSwitch";
import { Theme, ThemeContex } from "./contex";
import { store } from "./store";

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
          <RouterProvider router={router} />
        </ThemeContex.Provider>
      </div>
    </Provider>
  );
}
