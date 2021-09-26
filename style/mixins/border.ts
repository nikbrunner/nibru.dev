import { css, SerializedStyles } from "@emotion/react";

export const border = {
  thin: (color: string) => css`
    border: 1px solid ${color};
  `,
  default: (color: string) => css`
    border: 2px solid ${color};
  `,
  thicc: (color: string) => css`
    border: 4px solid ${color};
  `,
  extraThicc: (color: string) => css`
    border: 6px solid ${color};
  `
};
