"use client";
import React, { createContext, useState, useContext, useEffect } from 'react';
import { themes } from '../theme/themes';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === themes.light ? themes.dark : themes.light));
  };

  useEffect(() => {
    const root = document.documentElement;
    const themeKeys = Object.keys(theme);
    themeKeys.forEach((key) => {
      root.style.setProperty(key, theme[key]);
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
