import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import '../styles/globals.scss';

const queryCache = new QueryCache();

library.add(fab, fas);

const App = ({ Component, pageProps }) => (
  <>
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Component {...pageProps} />
    </ReactQueryCacheProvider>
  </>
);

export default App;
