import React, { createContext, useEffect, useState } from "react";

export enum ETheme {
  dark = "dark",
  light = "light"
}

export type TThemeContext = {
  theme: ETheme;
  setTheme: React.Dispatch<React.SetStateAction<ETheme>> | (() => void);
};

export const ThemeContext = createContext<TThemeContext>({
  theme: ETheme.dark,
  setTheme: () => {}
});

interface IProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: IProps) => {
  const [theme, setTheme] = useState<ETheme>(ETheme.light);

  // Listen for preferred color scheme
  useEffect(() => {
    const prefersDarkMode: MediaQueryList = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    // Initially read the preferred color-scheme
    if (prefersDarkMode.matches) {
      // setTheme(ETheme.dark);
    } else {
      setTheme(ETheme.light);
    }

    // Listen for changes for the preferred color-scheme
    prefersDarkMode.addEventListener(
      "change",
      (event: MediaQueryListEvent): void => {
        if (event.matches) {
          setTheme(ETheme.dark);
        } else {
          setTheme(ETheme.light);
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

    if (theme === ETheme.dark) {
      // localStorage.setItem('theme', Theme.dark);
      html.classList.add(ETheme.dark);
      html.classList.remove(ETheme.light);
    } else if (theme === ETheme.light) {
      // localStorage.setItem('theme', Theme.light);
      html.classList.add(ETheme.light);
      html.classList.remove(ETheme.dark);
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
