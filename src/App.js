import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

import Rent from './Pages/Rent';

function App() {
  return (
    <Switch>
      <Route exact path='/rent' component={Rent}/>
    </Switch>
  );
}

export default App;
