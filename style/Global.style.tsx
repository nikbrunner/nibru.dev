import { Global, css, useTheme, Theme } from "@emotion/react";

import { bg } from "../theme/mixins/bg";
import { text } from "../theme/mixins/text";
import { transition } from "../theme/mixins/transition";

const genGlobalStyles = (theme: Theme) =>
  css`
    * {
      box-sizing: border-box;
    }

    body {
      ${bg.color.primary(theme)}
      ${text.color.primary(theme)}
      ${transition.fast("background")}
      ${transition.fast("color")}

margin: 0;
      padding: 0;
      font-family: "Lora", serif;
      font-size: 18px;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow-x: hidden;
    }

    a {
      text-decoration: none;
      ${text.color.primary(theme)}
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-bottom: 0.25em;
    }
  `;

export const SGlobal = () => {
  const theme = useTheme();

  return <Global styles={genGlobalStyles(theme)} />;
};
