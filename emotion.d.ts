import { Theme } from "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    fg: {
      primary: string;
      secondary: string;
      ternary: string;
      accent: string;
    };

    bg: {
      primary: string;
      secondary: string;
      ternary: string;
      accent: string;
    };
  }
}
