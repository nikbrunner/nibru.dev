import { Theme } from "@emotion/react";

export const lightTheme: Theme = {
  fg: {
    primary: "#1D2530",
    secondary: "#273241",
    ternary: "#313F52",
    accent: "#70a9a1"
  },
  bg: {
    primary: "#eceff4",
    secondary: "#ced6e3",
    ternary: "#adb9d1",
    accent: "#70a9a1"
  }
};

export const darkTheme: Theme = {
  fg: {
    primary: "#eceff4",
    secondary: "#e5e9f0",
    ternary: "#d8dee9",
    accent: "#70a9a1"
  },
  bg: {
    primary: "#1D2530",
    secondary: "#273241",
    ternary: "#313F52",
    accent: "#70a9a1"
  }
};

export enum ETheme {
  Light = "Light",
  Dark = "Dark"
}
