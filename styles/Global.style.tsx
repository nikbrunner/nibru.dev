import { Global, css, useTheme, Theme } from "@emotion/react";

const genGlobalStyles = (theme: Theme) =>
  css`
    body {
      background-color: ${theme.bg_primary};
      color: ${theme.fg_primary};
    }

    a {
      text-decoration: none;
      color: ${theme.fg_accent};
    }
  `;

export const SGlobal = () => {
  const theme = useTheme();

  return <Global styles={genGlobalStyles(theme)} />;
};
