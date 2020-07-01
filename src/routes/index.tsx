import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Presentation from '../pages/Presentation';
import Repository from '../pages/Repository';

// import Landing from '../pages/Landing';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Presentation} />
    <Route path="/repo" component={Repository} />
  </Switch>
);

export default Routes;
