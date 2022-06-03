import { css, Theme } from "@emotion/react";

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

export const dotgrid = (color: string) => css`
  background-image: radial-gradient(${color} 1px, rgba(255, 255, 255, 0) 0);
  background-size: 20px 20px;
  background-position: -15px -15px;
`;
