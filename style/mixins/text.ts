import { css, SerializedStyles, Theme } from "@emotion/react";

export const text = {
  color: {
    primary: (theme: Theme) => css`
      color: ${theme.fg.primary};
    `,
    secondary: (theme: Theme) => css`
      color: ${theme.fg.secondary};
    `,
    ternary: (theme: Theme) => css`
      color: ${theme.fg.ternary};
    `,
    accent: (theme: Theme) => css`
      color: ${theme.fg.accent};
    `
  }
};
