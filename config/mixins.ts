import { css } from "@emotion/react";

export const border = {
  thin: (color: string) => css`
    border: 1px solid ${color};
  `,
  default: (color: string) => css`
    border: 2px solid ${color};
  `,
  thick: (color: string) => css`
    border: 4px solid ${color};
  `
};

const transitionEase = "cubic-bezier(0.445, 0.05, 0.55, 0.95)";

export const transition = {
  fast: (property: string) => css`
    transition: ${property} 0.25s ${transitionEase};
  `,
  default: (property: string) => css`
    transition: ${property} 0.5s ${transitionEase};
  `,
  slow: (property: string) => css`
    transition: ${property} 0.75s ${transitionEase};
  `,
  extraSlow: (property: string) => css`
    transition: ${property} 1s ${transitionEase};
  `
};

export const mixins = {
  border,
  transition
};
