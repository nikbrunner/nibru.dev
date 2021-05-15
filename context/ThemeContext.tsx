import React, { createContext, useEffect, useState } from 'react';

export enum Theme {
  dark = 'dark',
  light = 'light'
}

export type ThemeContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export const ThemeContext: React.Context<ThemeContextType> = createContext(
  null
);

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>(Theme.dark);

  // Listen for preferred color scheme
  useEffect(() => {
    const prefersDarkMode: MediaQueryList = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );

    prefersDarkMode.addEventListener(
      'change',
      (event: MediaQueryListEvent): void => {
        if (event.matches) {
          setTheme(Theme.dark);
        } else if (!event.matches) {
          setTheme(Theme.light);
        }
      }
    );
  }, []);

  // Read local storage
  useEffect(() => {
    if (localStorage.getItem('theme') === Theme.dark) {
      setTheme(Theme.dark);
    } else if (localStorage.getItem('theme') === Theme.light) {
      setTheme(Theme.light);
    } else if (localStorage.getItem('theme') === null) {
      setTheme(Theme.dark);
    }
  }, []);

  // Write localStorage & set class to html element
  useEffect(() => {
    const html = document.documentElement;

    if (theme === Theme.dark) {
      localStorage.setItem('theme', Theme.dark);
      html.classList.add(Theme.dark);
      html.classList.remove(Theme.light);
    } else if (theme === Theme.light) {
      localStorage.setItem('theme', Theme.light);
      html.classList.add(Theme.light);
      html.classList.remove(Theme.dark);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
