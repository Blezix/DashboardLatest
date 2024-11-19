import React, { createContext, useState, useMemo, useContext, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./muiTheme";

const ThemeModeContext = createContext();

export const ThemeModeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("theme");
    return savedMode || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  const theme = useMemo(() => (mode === "light" ? lightTheme : darkTheme), [mode]);

  const toggleTheme = (newMode) => {
    setMode((prevMode) => (prevMode !== newMode ? newMode : prevMode));
  };

  return (
      <ThemeModeContext.Provider value={{ mode, toggleTheme }}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ThemeModeContext.Provider>
  );
};

export const useThemeMode = () => useContext(ThemeModeContext);
