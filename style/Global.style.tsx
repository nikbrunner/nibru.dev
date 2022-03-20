import { Global, css, useTheme, Theme } from "@emotion/react";

import { background } from "@mixins/background";
import { text } from "../theme/mixins/text";
import { transition } from "../theme/mixins/transition";

const globalStyles = (theme: Theme) =>
  css`
    @import url("https://fonts.googleapis.com/css2?family=Vollkorn:ital@0;1&family=Work+Sans:ital,wght@0,200;0,300;0,400;1,800&display=swap");

    * {
      box-sizing: border-box;
    }

    body {
      ${background.color.primary(theme)}
      ${text.color.primary(theme)}
      ${transition.fast("background")}
      ${transition.fast("color")}

      margin: 0;
      padding: 0;
      font-family: "Work Sans", sans-serif;
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

  return <Global styles={globalStyles(theme)} />;
};
