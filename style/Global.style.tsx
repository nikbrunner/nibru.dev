import { Global, css, useTheme, Theme } from "@emotion/react";
import { bg, fg, transition } from "./config/mixins";

const genGlobalStyles = (theme: Theme) =>
  css`
    body {
      ${bg.primary(theme)}
      ${fg.primary(theme)}
      ${transition.fast("background")}
      ${transition.fast("color")}

      font-family: "Lora", serif;
      font-size: 18px;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    a {
      text-decoration: none;
      ${fg.primary(theme)}
    }
  `;

export const SGlobal = () => {
  const theme = useTheme();

  return <Global styles={genGlobalStyles(theme)} />;
};
