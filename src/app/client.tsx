"use client";

import { ReactElement, SyntheticEvent, useCallback, useState } from "react";

import { Theme, ThemeContex } from "@/components/Main/contex";
import ThemeSwitch from "@/components/ThemeSwitch";
import MainPage from "@/components/Main";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Provider } from "react-redux";
import { store } from "@/store/store";

type IndexPageProps = {
  children?: ReactElement;
};

export const Index = ({ children }: IndexPageProps) => {
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
          <ErrorBoundary>
            <MainPage>{children}</MainPage>
          </ErrorBoundary>
        </ThemeContex.Provider>
      </div>
    </Provider>
  );
};
