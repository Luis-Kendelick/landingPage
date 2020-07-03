import React from 'react';
import { RespHeader, Header } from './styles';
import Card from '../../components/Card';
import Yellowdiv from '../../components/YellowDiv';
import ChooseDiv from '../../components/ChooseDiv';
// import Minorcard from '../../components/Minorcard';
import bg from '../../assets/argo.svg';
import fiat from '../../assets/fiat.svg';

const Presentation: React.FC = () => {
  return (
    <>
      <section id="heading">
        <RespHeader>
          <button type="button" />
          <img src={fiat} alt="Logo Fiat" />
        </RespHeader>
        <Header>
          <img src={bg} alt="Logo Modelo Argo" />
        </Header>
        <Card />
      </section>
      <section id="choose-content">
        <Yellowdiv />
        <ChooseDiv />
      </section>
    </>
  );
};

export default Presentation;
