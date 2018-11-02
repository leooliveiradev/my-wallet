import React, { Fragment } from 'react';
import ThemeProvider from 'app/js/common/ThemeProvider';
import GlobalStyle from 'app/theme/global';
import Transaction from 'app/js/components/Transaction';

// TODO configure react router
const App = () => (
  <ThemeProvider>
    <Fragment>
      <GlobalStyle />
      <Transaction />
    </Fragment>
  </ThemeProvider>
);

export default App;
