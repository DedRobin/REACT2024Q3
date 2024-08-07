import { SyntheticEvent, useCallback, useState } from "react";

import { Theme, ThemeContex } from "@/components/Main/contex";
import ThemeSwitch from "@/components/ThemeSwitch";
import MainPage from "@/components/Main";
import ErrorBoundary from "@/components/ErrorBoundary";

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
    <div className={theme === "light" ? "app light" : "app dark"}>
      <ThemeContex.Provider value={theme}>
        <ThemeSwitch onClick={switchTheme} />
        <ErrorBoundary>
          <MainPage />
        </ErrorBoundary>
      </ThemeContex.Provider>
    </div>
  );
}
