import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as StyledComponentsThemeProvide } from 'styled-components';
import theme from 'app/theme';

const ThemeProvider = ({ children }) => (
  <StyledComponentsThemeProvide theme={theme}>
    {children}
  </StyledComponentsThemeProvide>
);

ThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ThemeProvider;
