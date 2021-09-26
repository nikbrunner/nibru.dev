import { Global, css, useTheme, Theme } from "@emotion/react";

import { bg } from "./mixins/bg";
import { text } from "./mixins/text";
import { transition } from "./mixins/transition";

const genGlobalStyles = (theme: Theme) =>
  css`
    body {
      ${bg.color.primary(theme)}
      ${text.color.primary(theme)}
      ${transition.fast("background")}
      ${transition.fast("color")}

      font-family: "Lora", serif;
      font-size: 18px;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    a {
      text-decoration: none;
      ${text.color.primary(theme)}
    }
  `;

export const SGlobal = () => {
  const theme = useTheme();

  return <Global styles={genGlobalStyles(theme)} />;
};
