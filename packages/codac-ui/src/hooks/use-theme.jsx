import { useContext } from "react";
import { ThemeContext } from "../theme/theme-context";
// // eslint-disable-next-line @typescript-eslint/no-empty-function
const defaultContext = { setTheme: (_) => null, themes: [] };
export const useTheme = () => useContext(ThemeContext) ?? defaultContext;
