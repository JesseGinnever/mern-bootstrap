import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Components/Home';
import SimpleCard from './Components/SimpleCard';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/home" exact component={Home} />
      <Route path="/" component={SimpleCard} />
    </Switch>
  </BrowserRouter>
);