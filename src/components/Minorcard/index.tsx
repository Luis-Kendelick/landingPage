import React, { useRef, useEffect } from 'react';
import plus from '../../assets/plussvg.svg';
import car from '../../assets/car1.jpg';
import { CardsStyle, MajorCardDiv } from './styles';

const Minorcard: React.FC = () => {
  return (
    <>
      <MajorCardDiv>
        <CardsStyle>
          <div className="plus">
            <img src={car} alt="" />
            <img src={plus} alt="" />
          </div>
          <div className="legend">
            <p>DESIGN ARROJADO</p>
          </div>
        </CardsStyle>
        <CardsStyle>
          <div className="plus">
            <img src={car} alt="" />
            <img src={plus} alt="" />
          </div>
          <div className="legend">
            <p>DESIGN ARROJADO</p>
          </div>
        </CardsStyle>
        <CardsStyle>
          <div className="plus">
            <img src={car} alt="" />
            <img src={plus} alt="" />
          </div>
          <div className="legend">
            <p>DESIGN ARROJADO</p>
          </div>
        </CardsStyle>
        <CardsStyle>
          <div className="plus">
            <img src={car} alt="" />
            <img src={plus} alt="" />
          </div>
          <div className="legend">
            <p>DESIGN ARROJADO</p>
          </div>
        </CardsStyle>
        <CardsStyle>
          <div className="plus">
            <img src={car} alt="" />
            <img src={plus} alt="" />
          </div>
          <div className="legend">
            <p>DESIGN ARROJADO</p>
          </div>
        </CardsStyle>
        <CardsStyle>
          <div className="plus">
            <img src={car} alt="" />
            <img src={plus} alt="" />
          </div>
          <div className="legend">
            <p>DESIGN ARROJADO</p>
          </div>
        </CardsStyle>
      </MajorCardDiv>
    </>
  );
};

export default Minorcard;
