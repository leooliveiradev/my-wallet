import React, { memo } from 'react';
import styled from 'styled-components';
import { fromTheme } from 'app/js/utils';

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 20rem;
  padding: 3rem;
  background: ${fromTheme('color.white')};;
`;

const Box = styled.div`
  display: flex;
  width: 30%;
  margin-right: 5rem;
`;

const Header = memo(({ children }) => (
  <HeaderWrapper>
    <Box>
      {children}
    </Box>
  </HeaderWrapper>
));

export default Header;
