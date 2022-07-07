/** @format */

import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const currentTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(currentTheme);
    localStorage.setItem('theme', currentTheme);
  };

  useEffect(() => {
    // catch theme from your system
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(darkMediaQuery.matches ? 'dark' : 'light');
    darkMediaQuery.addEventListener('change', e => {
      setTheme(e.matches ? 'dark' : 'light');
    });
  }, []);

  const contextValue = {
    theme: theme,
    toggleTheme: toggleTheme,
  };

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
