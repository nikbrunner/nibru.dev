import React, { createContext, useEffect, useState } from "react";

export enum Theme {
  dark = "dark",
  light = "light"
}

export type ThemeContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>> | (() => void);
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.dark,
  setTheme: () => {}
});

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>(Theme.dark);

  // Listen for preferred color scheme
  useEffect(() => {
    const prefersDarkMode: MediaQueryList = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    // Initially read the preferred color-scheme
    if (prefersDarkMode.matches) {
      setTheme(Theme.dark);
    } else {
      setTheme(Theme.light);
    }

    // Listen for changes for the preferred color-scheme
    prefersDarkMode.addEventListener(
      "change",
      (event: MediaQueryListEvent): void => {
        if (event.matches) {
          setTheme(Theme.dark);
        } else {
          setTheme(Theme.light);
        }
      }
    );
  }, []);

  // Read local storage
  // useEffect(() => {
  //   if (localStorage.getItem('theme') === Theme.dark) {
  //     setTheme(Theme.dark);
  //   } else if (localStorage.getItem('theme') === Theme.light) {
  //     setTheme(Theme.light);
  //   } else if (localStorage.getItem('theme') === null) {
  //     setTheme(Theme.dark);
  //   }
  // }, []);

  // Write localStorage & set class to html element
  useEffect(() => {
    const html = document.documentElement;

    if (theme === Theme.dark) {
      // localStorage.setItem('theme', Theme.dark);
      html.classList.add(Theme.dark);
      html.classList.remove(Theme.light);
    } else if (theme === Theme.light) {
      // localStorage.setItem('theme', Theme.light);
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
