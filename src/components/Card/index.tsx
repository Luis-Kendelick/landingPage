import React from 'react';
import plus from '../../assets/plussvg.svg';
import car from '../../assets/car1.jpg';
import { CardsStyle } from './styles';

const Card: React.FC = () => {
  return (
    <CardsStyle>
      <div className="plus">
        <img src={car} alt="" />
        <img src={plus} alt="" />
      </div>
      <div className="legend">
        <p>DESIGN ARROJADO</p>
      </div>
    </CardsStyle>
  );
};

export default Card;
