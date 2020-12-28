import React, { createContext, useState } from 'react';

export enum Theme {
  dark = 'dark',
  light = 'light'
}

export const ThemeContext = createContext(null);

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(Theme.dark);

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
