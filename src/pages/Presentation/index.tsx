import React from 'react';
import { Title } from './styles';
import Card from '../../components/Card';
import Minorcard from '../../components/Minorcard';

const Presentation: React.FC = () => {
  return (
    <Title>
      <div className="show">
        <Card />
      </div>
      <div className="choose">
        <Minorcard />
      </div>
    </Title>
  );
};

export default Presentation;
