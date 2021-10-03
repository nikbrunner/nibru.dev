import { css, SerializedStyles } from "@emotion/react";

import { space } from "./space";

export interface ISpacingLevel {
  zero: () => SerializedStyles;
  xxs: () => SerializedStyles;
  xs: () => SerializedStyles;
  s: () => SerializedStyles;
  m: () => SerializedStyles;
  l: () => SerializedStyles;
  xl: () => SerializedStyles;
  xxl: () => SerializedStyles;
  "3xl": () => SerializedStyles;
  "4xl": () => SerializedStyles;
  "5xl": () => SerializedStyles;
}

export interface IMargin extends ISpacingLevel {
  top: ISpacingLevel;
  right: ISpacingLevel;
  bottom: ISpacingLevel;
  left: ISpacingLevel;
  x: ISpacingLevel & {
    center: () => SerializedStyles;
  };
  y: ISpacingLevel;
}

export interface IPadding extends ISpacingLevel {
  top: ISpacingLevel;
  right: ISpacingLevel;
  bottom: ISpacingLevel;
  left: ISpacingLevel;
  x: ISpacingLevel;
  y: ISpacingLevel;
}

export const margin: IMargin = {
  zero: () => css`
    margin: 0;
  `,
  xxs: () => css`
    margin: ${space.xxs};
  `,
  xs: () => css`
    margin: ${space.xs};
  `,
  s: () => css`
    margin: ${space.s};
  `,
  m: () => css`
    margin: ${space.m};
  `,
  l: () => css`
    margin: ${space.l};
  `,
  xl: () => css`
    margin: ${space.xl};
  `,
  xxl: () => css`
    margin: ${space.xxl};
  `,
  "3xl": () => css`
    margin: ${space["3xl"]};
  `,
  "4xl": () => css`
    margin: ${space["4xl"]};
  `,
  "5xl": () => css`
    margin: ${space["5xl"]};
  `,
  top: {
    zero: () => css`
      margin-top: 0;
    `,
    xxs: () => css`
      margin-top: ${space.xxs};
    `,
    xs: () => css`
      margin-top: ${space.xs};
    `,
    s: () => css`
      margin-top: ${space.s};
    `,
    m: () => css`
      margin-top: ${space.m};
    `,
    l: () => css`
      margin-top: ${space.l};
    `,
    xl: () => css`
      margin-top: ${space.xl};
    `,
    xxl: () => css`
      margin-top: ${space.xxl};
    `,
    "3xl": () => css`
      margin-top: ${space["3xl"]};
    `,
    "4xl": () => css`
      margin-top: ${space["4xl"]};
    `,
    "5xl": () => css`
      margin-top: ${space["5xl"]};
    `
  },
  right: {
    zero: () => css`
      margin-right: 0;
    `,
    xxs: () => css`
      margin-right: ${space.xxs};
    `,
    xs: () => css`
      margin-right: ${space.xs};
    `,
    s: () => css`
      margin-right: ${space.s};
    `,
    m: () => css`
      margin-right: ${space.m};
    `,
    l: () => css`
      margin-right: ${space.l};
    `,
    xl: () => css`
      margin-right: ${space.xl};
    `,
    xxl: () => css`
      margin-right: ${space.xxl};
    `,
    "3xl": () => css`
      margin-right: ${space["3xl"]};
    `,
    "4xl": () => css`
      margin-right: ${space["4xl"]};
    `,
    "5xl": () => css`
      margin-right: ${space["5xl"]};
    `
  },
  bottom: {
    zero: () => css`
      margin-bottom: 0;
    `,
    xxs: () => css`
      margin-bottom: ${space.xxs};
    `,
    xs: () => css`
      margin-bottom: ${space.xs};
    `,
    s: () => css`
      margin-bottom: ${space.s};
    `,
    m: () => css`
      margin-bottom: ${space.m};
    `,
    l: () => css`
      margin-bottom: ${space.l};
    `,
    xl: () => css`
      margin-bottom: ${space.xl};
    `,
    xxl: () => css`
      margin-bottom: ${space.xxl};
    `,
    "3xl": () => css`
      margin-bottom: ${space["3xl"]};
    `,
    "4xl": () => css`
      margin-bottom: ${space["4xl"]};
    `,
    "5xl": () => css`
      margin-bottom: ${space["5xl"]};
    `
  },
  left: {
    zero: () => css`
      margin-left: 0;
    `,
    xxs: () => css`
      margin-left: ${space.xxs};
    `,
    xs: () => css`
      margin-left: ${space.xs};
    `,
    s: () => css`
      margin-left: ${space.s};
    `,
    m: () => css`
      margin-left: ${space.m};
    `,
    l: () => css`
      margin-left: ${space.l};
    `,
    xl: () => css`
      margin-left: ${space.xl};
    `,
    xxl: () => css`
      margin-left: ${space.xxl};
    `,
    "3xl": () => css`
      margin-left: ${space["3xl"]};
    `,
    "4xl": () => css`
      margin-left: ${space["4xl"]};
    `,
    "5xl": () => css`
      margin-left: ${space["5xl"]};
    `
  },
  x: {
    center: () => css`
      margin: 0 auto;
    `,
    zero: () => css`
      margin-left: 0;
      margin-right: 0;
    `,
    xxs: () => css`
      margin-left: ${space.xxs};
      margin-right: ${space.xxs};
    `,
    xs: () => css`
      margin-left: ${space.xs};
      margin-right: ${space.xs};
    `,
    s: () => css`
      margin-left: ${space.s};
      margin-right: ${space.s};
    `,
    m: () => css`
      margin-left: ${space.m};
      margin-right: ${space.m};
    `,
    l: () => css`
      margin-left: ${space.l};
      margin-right: ${space.l};
    `,
    xl: () => css`
      margin-left: ${space.xl};
      margin-right: ${space.xl};
    `,
    xxl: () => css`
      margin-left: ${space.xxl};
      margin-right: ${space.xxl};
    `,
    "3xl": () => css`
      margin-left: ${space["3xl"]};
      margin-right: ${space["3xl"]};
    `,
    "4xl": () => css`
      margin-left: ${space["4xl"]};
      margin-right: ${space["4xl"]};
    `,
    "5xl": () => css`
      margin-left: ${space["5xl"]};
      margin-right: ${space["5xl"]};
    `
  },
  y: {
    zero: () => css`
      margin-top: 0;
      margin-bottom: 0;
    `,
    xxs: () => css`
      margin-top: ${space.xxs};
      margin-bottom: ${space.xxs};
    `,
    xs: () => css`
      margin-top: ${space.xs};
      margin-bottom: ${space.xs};
    `,
    s: () => css`
      margin-top: ${space.s};
      margin-bottom: ${space.s};
    `,
    m: () => css`
      margin-top: ${space.m};
      margin-bottom: ${space.m};
    `,
    l: () => css`
      margin-top: ${space.l};
      margin-bottom: ${space.l};
    `,
    xl: () => css`
      margin-top: ${space.xl};
      margin-bottom: ${space.xl};
    `,
    xxl: () => css`
      margin-top: ${space.xxl};
      margin-bottom: ${space.xxl};
    `,
    "3xl": () => css`
      margin-top: ${space["3xl"]};
      margin-bottom: ${space["3xl"]};
    `,
    "4xl": () => css`
      margin-top: ${space["4xl"]};
      margin-bottom: ${space["4xl"]};
    `,
    "5xl": () => css`
      margin-top: ${space["5xl"]};
      margin-bottom: ${space["5xl"]};
    `
  }
};

export const padding: IPadding = {
  zero: () => css`
    padding: 0;
  `,
  xxs: () => css`
    padding: ${space.xxs};
  `,
  xs: () => css`
    padding: ${space.xs};
  `,
  s: () => css`
    padding: ${space.s};
  `,
  m: () => css`
    padding: ${space.m};
  `,
  l: () => css`
    padding: ${space.l};
  `,
  xl: () => css`
    padding: ${space.xl};
  `,
  xxl: () => css`
    padding: ${space.xxl};
  `,
  "3xl": () => css`
    padding: ${space["3xl"]};
  `,
  "4xl": () => css`
    padding: ${space["4xl"]};
  `,
  "5xl": () => css`
    padding: ${space["5xl"]};
  `,
  top: {
    zero: () => css`
      padding-top: 0;
    `,
    xxs: () => css`
      padding-top: ${space.xxs};
    `,
    xs: () => css`
      padding-top: ${space.xs};
    `,
    s: () => css`
      padding-top: ${space.s};
    `,
    m: () => css`
      padding-top: ${space.m};
    `,
    l: () => css`
      padding-top: ${space.l};
    `,
    xl: () => css`
      padding-top: ${space.xl};
    `,
    xxl: () => css`
      padding-top: ${space.xxl};
    `,
    "3xl": () => css`
      padding-top: ${space["3xl"]};
    `,
    "4xl": () => css`
      padding-top: ${space["4xl"]};
    `,
    "5xl": () => css`
      padding-top: ${space["5xl"]};
    `
  },
  right: {
    zero: () => css`
      padding-right: 0;
    `,
    xxs: () => css`
      padding-right: ${space.xxs};
    `,
    xs: () => css`
      padding-right: ${space.xs};
    `,
    s: () => css`
      padding-right: ${space.s};
    `,
    m: () => css`
      padding-right: ${space.m};
    `,
    l: () => css`
      padding-right: ${space.l};
    `,
    xl: () => css`
      padding-right: ${space.xl};
    `,
    xxl: () => css`
      padding-right: ${space.xxl};
    `,
    "3xl": () => css`
      padding-right: ${space["3xl"]};
    `,
    "4xl": () => css`
      padding-right: ${space["4xl"]};
    `,
    "5xl": () => css`
      padding-right: ${space["5xl"]};
    `
  },
  bottom: {
    zero: () => css`
      padding-bottom: 0;
    `,
    xxs: () => css`
      padding-bottom: ${space.xxs};
    `,
    xs: () => css`
      padding-bottom: ${space.xs};
    `,
    s: () => css`
      padding-bottom: ${space.s};
    `,
    m: () => css`
      padding-bottom: ${space.m};
    `,
    l: () => css`
      padding-bottom: ${space.l};
    `,
    xl: () => css`
      padding-bottom: ${space.xl};
    `,
    xxl: () => css`
      padding-bottom: ${space.xxl};
    `,
    "3xl": () => css`
      padding-bottom: ${space["3xl"]};
    `,
    "4xl": () => css`
      padding-bottom: ${space["4xl"]};
    `,
    "5xl": () => css`
      padding-bottom: ${space["5xl"]};
    `
  },
  left: {
    zero: () => css`
      padding-left: 0;
    `,
    xxs: () => css`
      padding-left: ${space.xxs};
    `,
    xs: () => css`
      padding-left: ${space.xs};
    `,
    s: () => css`
      padding-left: ${space.s};
    `,
    m: () => css`
      padding-left: ${space.m};
    `,
    l: () => css`
      padding-left: ${space.l};
    `,
    xl: () => css`
      padding-left: ${space.xl};
    `,
    xxl: () => css`
      padding-left: ${space.xxl};
    `,
    "3xl": () => css`
      padding-left: ${space["3xl"]};
    `,
    "4xl": () => css`
      padding-left: ${space["4xl"]};
    `,
    "5xl": () => css`
      padding-left: ${space["5xl"]};
    `
  },
  x: {
    zero: () => css`
      padding-left: 0;
      padding-right: 0;
    `,
    xxs: () => css`
      padding-left: ${space.xxs};
      padding-right: ${space.xxs};
    `,
    xs: () => css`
      padding-left: ${space.xs};
      padding-right: ${space.xs};
    `,
    s: () => css`
      padding-left: ${space.s};
      padding-right: ${space.s};
    `,
    m: () => css`
      padding-left: ${space.m};
      padding-right: ${space.m};
    `,
    l: () => css`
      padding-left: ${space.l};
      padding-right: ${space.l};
    `,
    xl: () => css`
      padding-left: ${space.xl};
      padding-right: ${space.xl};
    `,
    xxl: () => css`
      padding-left: ${space.xxl};
      padding-right: ${space.xxl};
    `,
    "3xl": () => css`
      padding-left: ${space["3xl"]};
      padding-right: ${space["3xl"]};
    `,
    "4xl": () => css`
      padding-left: ${space["4xl"]};
      padding-right: ${space["4xl"]};
    `,
    "5xl": () => css`
      padding-left: ${space["5xl"]};
      padding-right: ${space["5xl"]};
    `
  },
  y: {
    zero: () => css`
      padding-top: 0;
      padding-bottom: 0;
    `,
    xxs: () => css`
      padding-top: ${space.xxs};
      padding-bottom: ${space.xxs};
    `,
    xs: () => css`
      padding-top: ${space.xs};
      padding-bottom: ${space.xs};
    `,
    s: () => css`
      padding-top: ${space.s};
      padding-bottom: ${space.s};
    `,
    m: () => css`
      padding-top: ${space.m};
      padding-bottom: ${space.m};
    `,
    l: () => css`
      padding-top: ${space.l};
      padding-bottom: ${space.l};
    `,
    xl: () => css`
      padding-top: ${space.xl};
      padding-bottom: ${space.xl};
    `,
    xxl: () => css`
      padding-top: ${space.xxl};
      padding-bottom: ${space.xxl};
    `,
    "3xl": () => css`
      padding-top: ${space["3xl"]};
      padding-bottom: ${space["3xl"]};
    `,
    "4xl": () => css`
      padding-top: ${space["4xl"]};
      padding-bottom: ${space["4xl"]};
    `,
    "5xl": () => css`
      padding-top: ${space["5xl"]};
      padding-bottom: ${space["5xl"]};
    `
  }
};
