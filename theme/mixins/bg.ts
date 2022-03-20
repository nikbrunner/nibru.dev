import { css, Theme } from "@emotion/react";

export const bg = {
  color: {
    primary: (theme: Theme) => css`
      background-color: ${theme.bg.primary};
    `,
    secondary: (theme: Theme) => css`
      background-color: ${theme.bg.secondary};
    `,
    ternary: (theme: Theme) => css`
      background-color: ${theme.bg.ternary};
    `,
    accent: (theme: Theme) => css`
      background-color: ${theme.bg.accent};
    `
  }
};
