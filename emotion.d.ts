import { Theme } from "@emotion/react";
import { IBorder } from "@theme/mixins/border";
import { IBackground } from "@theme/mixins/background";

declare module "@emotion/react" {
  export interface IBaseTheme {
    border: IBorder;
  }

  export interface Theme extends IBaseTheme {
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
