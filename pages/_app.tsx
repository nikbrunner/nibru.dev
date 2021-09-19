import React from "react";

import "../style/main.scss";

const App = ({ Component, pageProps }) => (
  <div className="App">
    <Component {...pageProps} />
  </div>
);

export default App;
