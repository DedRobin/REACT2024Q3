import { createContext } from "react";

export type Theme = "light" | "dark";

export const ThemeContex = createContext<Theme>("light");
