import { SGlobal } from "@styles/Global.style";
import { ThemeProvider } from "@theme/ThemeProvider";

const App = ({ Component, pageProps }) => {
  return (
    <div className="App">
      <ThemeProvider>
        <SGlobal />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
};

export default App;
