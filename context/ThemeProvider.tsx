import {
  Theme,
  ThemeProvider as EmotionThemeProvider
} from "@emotion/react";

const lightTheme: Theme = {
  fg_primary: "#0f0f0f",
  fg_secondary: "#1f1f1f",
  bg_primary: "#ffffff",
  bg_secondary: "#f3f3f3",
  fg_accent: "#274de6"
};

const darkTheme: Theme = {
  fg_primary: "#ffffff",
  fg_secondary: "#f3f3f3",
  bg_primary: "#0f0f0f",
  bg_secondary: "#1f1f1f",
  fg_accent: "#274de6"
};

export type TTheme = "light" | "dark";

interface Props {
  children: React.ReactNode;
  theme: TTheme;
}

export const ThemeProvider = ({ children, theme }: Props) => (
  <EmotionThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    {children}
  </EmotionThemeProvider>
);
