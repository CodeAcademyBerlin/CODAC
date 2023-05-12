import { createContext, useContext, useState } from "react";
type ThemesType = "light" | "dark" | "system";
// const MEDIA = "(prefers-color-scheme: dark)";
// const isServer = typeof window === "undefined";
interface ThemeContextType {
  theme: ThemesType;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemesType>("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const contextValue = {
    theme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);

// Helper functions
// const getSystemTheme = (e?: MediaQueryList | MediaQueryListEvent) => {
//   if (!e) e = window.matchMedia(MEDIA);
//   const isDark = e.matches;
//   const systemTheme = isDark ? "dark" : "light";
//   return systemTheme;
// };
// const getSystemTheme = (e?: MediaQueryList | MediaQueryListEvent) => {
//   if (!e) e = window.matchMedia(MEDIA);
//   const isDark = e.matches;
//   const systemTheme = isDark ? "dark" : "light";
//   return systemTheme;
// };
