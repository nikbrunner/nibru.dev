import { css, SerializedStyles } from "@emotion/react";

export interface IBorder {
  thin: (color: string) => SerializedStyles;
  default: (color: string) => SerializedStyles;
  thicc: (color: string) => SerializedStyles;
  extraThicc: (color: string) => SerializedStyles;

  radius: {
    xs: () => SerializedStyles;
    sm: () => SerializedStyles;
    md: () => SerializedStyles;
    lg: () => SerializedStyles;
    round: () => SerializedStyles;
  };
}

export const border: IBorder = {
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
  `,
  radius: {
    xs: () =>
      css`
        border-radius: 4px;
      `,
    sm: () =>
      css`
        border-radius: 6px;
      `,
    md: () =>
      css`
        border-radius: 8px;
      `,
    lg: () =>
      css`
        border-radius: 18px;
      `,
    round: () =>
      css`
        border-radius: 999px;
      `
  }
};
