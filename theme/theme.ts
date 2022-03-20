import { Theme } from "@emotion/react";
import { colors } from "./mixins/colors";

export const lightTheme: Theme = {
  fg: {
    primary: colors.black,
    secondary: colors.gray[9],
    ternary: colors.gray[8],
    accent: colors.blue[5]
  },
  bg: {
    primary: colors.white,
    secondary: colors.gray[0],
    ternary: colors.gray[1],
    accent: colors.blue[5]
  }
};

export const darkTheme: Theme = {
  fg: {
    primary: colors.white,
    secondary: colors.gray[0],
    ternary: colors.gray[1],
    accent: colors.green[3]
  },
  bg: {
    primary: colors.gray[9],
    secondary: colors.gray[8],
    ternary: colors.gray[7],
    accent: colors.green[3]
  }
};

export enum ETheme {
  Light = "Light",
  Dark = "Dark"
}
