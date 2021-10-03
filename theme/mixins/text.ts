import { css, Theme } from "@emotion/react";

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
  },
  size: {
    xs: () => css`
      font-size: 0.5rem;
    `,
    s: () => css`
      font-size: 0.75rem;
    `,
    base: () => css`
      font-size: 1rem;
    `,
    l: () => css`
      font-size: 1.5rem;
    `,
    xl: () => css`
      font-size: 2rem;
    `,
    xxl: () => css`
      font-size: 3rem;
    `,
    xxxl: () => css`
      font-size: 4rem;
    `
  },
  lineHeight: {
    xs: () => css`
      line-height: 1;
    `,
    s: () => css`
      line-height: 1.25;
    `,
    base: () => css`
      line-height: 1.5;
    `,
    l: () => css`
      line-height: 1.75;
    `,
    xl: () => css`
      line-height: 2;
    `
  }
};
