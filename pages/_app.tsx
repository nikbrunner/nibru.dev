import React from 'react';

import { ThemeProvider } from '@context/ThemeContext';

import '../style/main.scss';

const App = ({ Component, pageProps }) => (
  <div className='App'>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  </div>
);

export default App;
