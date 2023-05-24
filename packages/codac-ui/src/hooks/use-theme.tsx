import { useContext } from "react";

import { ThemeContext } from "../theme/theme-context";
import type { UseThemeProps } from "../theme/types";

// // eslint-disable-next-line @typescript-eslint/no-empty-function
const defaultContext: UseThemeProps = { setTheme: (_) => null, themes: [] };

export const useTheme = () => useContext(ThemeContext) ?? defaultContext;
