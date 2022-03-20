import { Theme } from "@emotion/react";

export interface IBackground {
  color: {
    primary: (theme: Theme) => string;
    secondary: (theme: Theme) => string;
    ternary: (theme: Theme) => string;
    accent: (theme: Theme) => string;
  };
}

export const background: IBackground = {
  color: {
    primary: (theme: Theme) => `background-color: ${theme.bg.primary};`,
    secondary: (theme: Theme) => `background-color: ${theme.bg.secondary};`,
    ternary: (theme: Theme) => `background-color: ${theme.bg.ternary};`,
    accent: (theme: Theme) => `background-color: ${theme.bg.accent};`
  }
};
