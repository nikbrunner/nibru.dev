import { useState } from "react";

import { SGlobal } from "@styles/Global.style";
import { ThemeProvider, TTheme } from "@context/ThemeProvider";

const App = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState<TTheme>("light");
  return (
    <div className="App">
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>

      <ThemeProvider theme={theme}>
        <SGlobal />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
};

export default App;
