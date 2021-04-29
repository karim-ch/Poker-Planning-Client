import { memo } from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from './reset';

const globalStyles = createGlobalStyle`
  ${reset}

  :root {
    position: relative;    
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
  }
`;

export default memo(globalStyles);
