import React from 'react';
import withStyle from './withStyle';

const Dashboard = ({ className }) => {
  return (
    <div className={className}>
      <h1> Create </h1>
      <h1> List </h1>
    </div>
  );
};

export default withStyle(Dashboard);
