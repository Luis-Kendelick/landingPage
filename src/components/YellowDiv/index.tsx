import React from 'react';
import { Yellow } from './styles';

const YellowDiv: React.FC = () => {
  return (
    <Yellow>
      <div id="gosta">
        <p>Quem gosta desses destaques prefere essa versão:</p>
      </div>
      <div id="hash">
        <strong>#ficaadica</strong>
      </div>
    </Yellow>
  );
};

export default YellowDiv;
