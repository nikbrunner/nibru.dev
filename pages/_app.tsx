import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import '../scss/main.scss';

library.add(fab, fas);

const App = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
  </>
);

export default App;
