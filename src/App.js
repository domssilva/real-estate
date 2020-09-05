import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

import GlobalState from './context/GlobalState';

import Home from './Pages/Home';
import Rent from './Pages/Rent';

function App() {

  console.log(GlobalState);

  return (
    <GlobalState>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/rent/:state' component={Rent}/>
      </Switch>
    </GlobalState>
  );
}

export default App;
