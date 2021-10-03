import { createContext, Dispatch, SetStateAction, useState } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";

import { lightTheme, darkTheme, ETheme } from "@theme/theme";

interface IProps {
  children: React.ReactNode;
}

interface IThemeContext {
  theme: ETheme;
  setTheme: Dispatch<SetStateAction<ETheme>>;
}

export const ThemeContext = createContext<IThemeContext>(
  {} as IThemeContext
);

export const ThemeProvider = ({ children }: IProps) => {
  const [theme, setTheme] = useState<ETheme>(ETheme.Dark);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <EmotionThemeProvider
        theme={theme === ETheme.Light ? lightTheme : darkTheme}
      >
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};
