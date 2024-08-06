import { SyntheticEvent } from "react";

import { ThemeContex } from "../Main/contex";

type ThemeSwitchProps = {
  onClick: (event: SyntheticEvent) => void;
};

export default function ThemeSwitch({ onClick }: ThemeSwitchProps) {
  return (
    <ThemeContex.Consumer>
      {(value) => (
        <div className="theme-switch-wrapper">
          <div
            className={value === "light" ? "theme-switch" : "theme-switch dark"}
            onClick={onClick}
          ></div>
        </div>
      )}
    </ThemeContex.Consumer>
  );
}
