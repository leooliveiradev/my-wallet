import React, { memo } from 'react';
import styled from 'styled-components';
import Menu from 'app/js/common/Menu';

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  min-height: 100vh;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Layout = memo(({ children }) => (
  <Wrapper>
    <Menu />
    <Container>
      <Content>
        {children}
      </Content>
    </Container>
  </Wrapper>
));

export default Layout;
