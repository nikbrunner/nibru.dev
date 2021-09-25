import { Global, css, useTheme, Theme } from "@emotion/react";

import { transition } from "./mixins";

const genGlobalStyles = (theme: Theme) =>
  css`
    body {
      background-color: ${theme.bg.primary};
      color: ${theme.fg.primary};
      ${transition.fast("background")}
      ${transition.fast("color")}
    }

    a {
      text-decoration: none;
      color: ${theme.fg.primary};
    }
  `;

export const SGlobal = () => {
  const theme = useTheme();

  return <Global styles={genGlobalStyles(theme)} />;
};
