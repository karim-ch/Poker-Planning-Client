import React from 'react';
import withStyle from './withStyle';

const Layout = ({ className, children }) => {
  return (
    <div className={className}>
      <div style={{ height: '40px', border: 'solid 1px' }}>navbar</div>
      <div className="main">{children}</div>
      <div>footer</div>
    </div>
  );
};

export default withStyle(Layout);
