import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import GlobalState from './context/GlobalState';

import Home from './Pages/Home';
import Rent from './Pages/Rent';
import PropertyDetails from './Pages/PropertyDetails';

function App() {
  return (
    <GlobalState>
      <AnimatePresence>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/rent/:state' component={Rent}/>
          <Route exact path='/property/:id' component={PropertyDetails}/>
        </Switch>
      </AnimatePresence>
    </GlobalState>
  );
}

export default App;
