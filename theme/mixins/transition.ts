import { css, SerializedStyles } from "@emotion/react";

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
