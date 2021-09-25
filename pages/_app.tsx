import { useState } from "react";

import { SGlobal } from "@styles/Global.style";
import { ThemeProvider } from "@theme/ThemeProvider";
import { ETheme } from "@theme/themes";
import { css } from "@emotion/react";

const App = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState<ETheme>(ETheme.Light);

  return (
    <div className="App">
      <button
        css={css`
          margin-right: 1rem;
        `}
        onClick={() => setTheme(ETheme.Light)}
      >
        Light
      </button>
      <button onClick={() => setTheme(ETheme.Dark)}>Dark</button>

      <ThemeProvider theme={theme}>
        <SGlobal />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
};

export default App;
