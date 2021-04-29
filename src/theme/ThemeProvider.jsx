import React from 'react';
import { ThemeProvider as StyledTheme } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './appTheme';

const ThemeProvider = ({ children }) => {
  return (
    <StyledTheme theme={theme}>
      <GlobalStyles />
      {children}
    </StyledTheme>
  );
};

export default ThemeProvider;
