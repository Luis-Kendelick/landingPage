import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { Cards, MajorCards, MinorCards } from './styles';

import car1 from '../../assets/argo-cima.jpg';
import plus from '../../assets/plussvg.svg';
import re from '../../assets/cam-de-re.jpg';
import central from '../../assets/central-multimidia.jpg';
import design from '../../assets/design-interno.jpg';
import altura from '../../assets/maior-altura.jpg';
import pneus from '../../assets/pneus.jpg';
import tablet from '../../assets/tablet-s-design.jpg';

const Card: React.FC = () => {
  return (
    <>
      <Cards>
        <div className="card-content">
          <MajorCards>
            <div className="image-container">
              <div className="car-container">
                <img src={car1} alt="" className="carro" />
              </div>
              <div className="plus-container">
                <img src={plus} alt="" className="plus" />
              </div>
            </div>
            <footer>
              <p>DESIGN ARROJADO</p>
            </footer>
          </MajorCards>
          <MinorCards>
            <ScrollContainer className="ScrollContainer" vertical={false}>
              <div className="scroll-container">
                <div className="image-container">
                  <div className="car-container">
                    <img src={tablet} alt="" className="carro" />
                  </div>
                  <div className="plus-container">
                    <img src={plus} alt="" className="plus" />
                  </div>
                </div>
                <footer>
                  <p>DESIGN ARROJADO</p>
                </footer>
              </div>
              <div className="scroll-container">
                <div className="image-container">
                  <div className="car-container">
                    <img src={re} alt="" className="carro" />
                  </div>
                  <div className="plus-container">
                    <img src={plus} alt="" className="plus" />
                  </div>
                </div>
                <footer>
                  <p>DESIGN ARROJADO</p>
                </footer>
              </div>
              <div className="scroll-container">
                <div className="image-container">
                  <div className="car-container">
                    <img src={central} alt="" className="carro" />
                  </div>
                  <div className="plus-container">
                    <img src={plus} alt="" className="plus" />
                  </div>
                </div>
                <footer>
                  <p>DESIGN ARROJADO</p>
                </footer>
              </div>
              <div className="scroll-container">
                <div className="image-container">
                  <div className="car-container">
                    <img src={design} alt="" className="carro" />
                  </div>
                  <div className="plus-container">
                    <img src={plus} alt="" className="plus" />
                  </div>
                </div>
                <footer>
                  <p>DESIGN ARROJADO</p>
                </footer>
              </div>
              <div className="scroll-container">
                <div className="image-container">
                  <div className="car-container">
                    <img src={altura} alt="" className="carro" />
                  </div>
                  <div className="plus-container">
                    <img src={plus} alt="" className="plus" />
                  </div>
                </div>
                <footer>
                  <p>DESIGN ARROJADO</p>
                </footer>
              </div>
              <div className="scroll-container">
                <div className="image-container">
                  <div className="car-container">
                    <img src={pneus} alt="" className="carro" />
                  </div>
                  <div className="plus-container">
                    <img src={plus} alt="" className="plus" />
                  </div>
                </div>
                <footer>
                  <p>DESIGN ARROJADO</p>
                </footer>
              </div>
            </ScrollContainer>
          </MinorCards>
        </div>
      </Cards>
    </>
  );
};

export default Card;
