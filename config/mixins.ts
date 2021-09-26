import { css, SerializedStyles, Theme } from "@emotion/react";

export const bg = {
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
};

export const fg = {
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
};

export const border = {
  thin: (color: string): SerializedStyles => css`
    border: 1px solid ${color};
  `,
  default: (color: string): SerializedStyles => css`
    border: 2px solid ${color};
  `,
  thick: (color: string): SerializedStyles => css`
    border: 4px solid ${color};
  `
};

const transitionEase = "cubic-bezier(0.445, 0.05, 0.55, 0.95)";

export const transition = {
  fast: (property: string): SerializedStyles => css`
    transition: ${property} 0.25s ${transitionEase};
  `,
  default: (property: string): SerializedStyles => css`
    transition: ${property} 0.5s ${transitionEase};
  `,
  slow: (property: string): SerializedStyles => css`
    transition: ${property} 0.75s ${transitionEase};
  `,
  extraSlow: (property: string): SerializedStyles => css`
    transition: ${property} 1s ${transitionEase};
  `
};

export const flex = (
  flow:
    | "row wrap"
    | "row nowrap"
    | "column wrap"
    | "column nowrap" = "row wrap",
  placeItems: string
): SerializedStyles => css`
  display: flex;
  flex-flow: ${flow};
  place-items: ${placeItems};
`;

export const mixins = {
  bg,
  fg,
  border,
  transition,
  flex
};
