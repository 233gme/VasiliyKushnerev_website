'use client';
import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  const toggleTheme = () => {
    setMode((prev) => prev === 'dark' ? 'light' : 'dark');
  };

  const setToLocalStorage = (mode) => {
    localStorage.setItem('vk_theme_mode', mode);
  };

  useEffect(() => {
    const mode = localStorage.getItem('vk_theme_mode');
    if (mode) {
      setMode(mode);
    }
  }, []);

  useEffect(() => {
    setToLocalStorage(mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <div className={`theme ${mode}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
