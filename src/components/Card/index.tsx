import React from 'react';
import { Cards } from './styles';

const Card: React.FC = () => {
  return (
    <>
      <Cards>
        <div className="card-content">
          <div className="major-card" />
          <div className="minor-cards" />
        </div>
      </Cards>
    </>
  );
};

export default Card;
