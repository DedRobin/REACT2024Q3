import { RouterProvider } from "react-router-dom";
import { router } from "../views/root";

import "./style.css";
import ThemeSwitch from "../components/ThemeSwitch";
import { SyntheticEvent, useCallback, useState } from "react";
import { Theme, ThemeContex } from "./contex";

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
    <ThemeContex.Provider value={theme}>
      <ThemeSwitch onClick={switchTheme} />
      <RouterProvider router={router} />;
    </ThemeContex.Provider>
  );
}
