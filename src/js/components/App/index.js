import React, { Fragment } from 'react';
import styled from 'styled-components';
import ThemeProvider from 'app/js/common/ThemeProvider';
import GlobalStyle from 'app/theme/global';
import { fromTheme } from 'app/js/utils';

const Title = styled.h1`
  color: ${fromTheme('color.gray')}; 
`;

const App = () => (
  <ThemeProvider>
    <Fragment>
      <GlobalStyle />
      <Title>
        Title
      </Title>
    </Fragment>
  </ThemeProvider>
);

export default App;
