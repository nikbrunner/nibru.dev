import { Theme } from "@emotion/react";

export const lightTheme: Theme = {
  fg: {
    primary: "#0f0f0f",
    secondary: "#1f1f1f",
    ternary: "#353535",
    accent: "#274de6"
  },
  bg: {
    primary: "#ffffff",
    secondary: "#f4f4f4",
    ternary: "#dedede",
    accent: "#274de6"
  }
};

export const darkTheme: Theme = {
  fg: {
    primary: "#ffffff",
    secondary: "#f4f4f4",
    ternary: "#dedede",
    accent: "#27e67d"
  },
  bg: {
    primary: "#0f0f0f",
    secondary: "#1f1f1f",
    ternary: "#3a3a3a",
    accent: "#27e67d"
  }
};

export enum ETheme {
  Light = "Light",
  Dark = "Dark"
}
