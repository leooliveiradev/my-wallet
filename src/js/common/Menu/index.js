import React, { memo } from 'react';
import styled from 'styled-components';
import MenuIcons from './Icons';

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 7rem;
  height: 100vh;
  box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.2);
  z-index: 999;
`;

const Menu = memo(() => (
  <MenuWrapper>
    <MenuIcons />
  </MenuWrapper>
));

export default Menu;
