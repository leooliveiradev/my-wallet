import React, { memo } from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import PropTypes from 'prop-types';

const icons = [
  { title: 'wallet', icon: '/src/assets/wallet.svg' },
  { title: 'chart', icon: '/src/assets/bar-chart.svg' },
  { title: 'transfer', icon: '/src/assets/transfer.svg' },
  { title: 'chat', icon: '/src/assets/chat.svg' },
  { title: 'download', icon: '/src/assets/download.svg' },
  { title: 'settings', icon: '/src/assets/settings.svg' },
];

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 8rem;
  height: 100vh;
  box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.2);
`;

const Icon = styled.div`
  display: flex;
  width: 3rem;
  height: 3rem;
  margin: 2rem 0;
  svg {
    width: 100%;
    height: auto;
  }
`;

const renderIcon = ({ title, icon }) => (
  <Icon key={title}>
    <ReactSVG
      title={title}
      src={icon}
    />
  </Icon>
);

renderIcon.propTypes = {
  title: PropTypes.element.isRequired,
  icon: PropTypes.element.isRequired,
};

const MenuIcon = memo(() => icons.map(renderIcon));

export default MenuIcon;
