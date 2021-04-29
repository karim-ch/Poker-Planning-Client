import React from 'react';
import { useParams } from 'react-router-dom';
import withStyle from './withStyle';

const Document = ({ className }) => {
  const { id = '' } = useParams();
  return (
    <div className={className}>
      <h1> Doc {id}</h1>
    </div>
  );
};

export default withStyle(Document);
