import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";

import { darkTheme, ETheme, lightTheme } from "@theme/themes";

interface Props {
  children: React.ReactNode;
  theme: ETheme;
}

export const ThemeProvider = ({ children, theme }: Props) => (
  <EmotionThemeProvider
    theme={theme === ETheme.Light ? lightTheme : darkTheme}
  >
    {children}
  </EmotionThemeProvider>
);
