import React, { Fragment } from 'react';
import ThemeProvider from 'app/js/common/ThemeProvider';
import GlobalStyle from 'app/theme/global';
import Transaction from 'app/js/components/Transaction';
import Layout from 'app/js/common/Layout';

// TODO configure react router
const App = () => (
  <ThemeProvider>
    <Fragment>
      <GlobalStyle />
      <Layout>
        <Transaction />
      </Layout>
    </Fragment>
  </ThemeProvider>
);

export default App;
