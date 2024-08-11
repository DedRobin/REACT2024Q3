import { ReactElement, SyntheticEvent, useCallback, useState } from "react";

import { Theme, ThemeContex } from "@/components/Main/contex";
import ThemeSwitch from "@/components/ThemeSwitch";
import MainPage from "@/components/Main";
import ErrorBoundary from "@/components/ErrorBoundary";
import { NextPageWithLayout } from "./_app";

type IndexPageProps = {
  children?: ReactElement;
};

export const IndexPage: NextPageWithLayout<IndexPageProps> = ({ children }) => {
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
          <MainPage>{children}</MainPage>
        </ErrorBoundary>
      </ThemeContex.Provider>
    </div>
  );
};

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default IndexPage;
