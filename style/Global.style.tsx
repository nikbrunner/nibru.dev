import { Global, css, useTheme, Theme } from "@emotion/react";

import { background } from "@mixins/background";
import { text } from "../theme/mixins/text";
import { transition } from "../theme/mixins/transition";

const globalStyles = (theme: Theme) =>
  css`
    @font-face {
      font-family: "JetBrainsMono";
      src: url("/fonts/jetbrains-mono/JetBrainsMono-Regular.woff2");
      font-style: normal;
      font-weight: 400;
      font-display: swap;
    }

    @font-face {
      font-family: "JetBrainsMono";
      src: url("/fonts/jetbrains-mono/JetBrainsMono-Italic.woff2");
      font-style: italic;
      font-weight: 400;
      font-display: swap;
    }

    @font-face {
      font-family: "JetBrainsMono";
      src: url("/fonts/jetbrains-mono/JetBrainsMono-SemiBold.woff2");
      font-style: normal;
      font-weight: 600;
      font-display: swap;
    }

    @font-face {
      font-family: "JetBrainsMono";
      src: url("/fonts/jetbrains-mono/JetBrainsMono-SemiBoldItalic.woff2");
      font-style: italic;
      font-weight: 600;
      font-display: swap;
    }

    @font-face {
      font-family: "JetBrainsMono";
      src: url("/fonts/jetbrains-mono/JetBrainsMono-Bold.woff2");
      font-style: normal;
      font-weight: 900;
      font-display: swap;
    }

    @font-face {
      font-family: "JetBrainsMono";
      src: url("/fonts/jetbrains-mono/JetBrainsMono-BoldItalic.woff2");
      font-style: italic;
      font-weight: 900;
      font-display: swap;
    }

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
      font-family: "JetBrainsMono", monospace;
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
