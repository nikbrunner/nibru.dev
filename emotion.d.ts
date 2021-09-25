import "@emotion/react";
import { ITheme } from "./context/ThemeProvider";

declare module "@emotion/react" {
  export interface Theme {
    fg_primary: string;
    fg_secondary: string;

    bg_primary: string;
    bg_secondary: string;

    fg_accent: string;
  }
}
