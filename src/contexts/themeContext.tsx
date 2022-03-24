import React, { useState, createContext, useContext } from "react";

type Theme = "dark" | "light";

interface ThemContextInterface {
  theme: Theme;
  toggleTheme: () => void;
}

interface Props {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemContextInterface | null>(null);

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = (): void => {
    let nextTheme: Theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
