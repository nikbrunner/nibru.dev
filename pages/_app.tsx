import React from 'react';

import { ThemeProvider } from '@context/ThemeContext';

import '../scss/main.scss';

const App = ({ Component, pageProps }) => (
  <div className='App'>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  </div>
);

export default App;
