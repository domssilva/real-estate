import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import GlobalState from './Context/GlobalState';

import Home from './Pages/Home';
import Rent from './Pages/Rent';
import Error from './Pages/Error';
import AllProperties from './Pages/AllProperties';
import PropertyDetails from './Pages/PropertyDetails';

function App() {
  return (
    <GlobalState>
      <AnimatePresence>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/all' component={AllProperties}/>
          <Route exact path='/rent/:state' component={Rent}/> 
          <Route exact path='/property/:stateid' component={PropertyDetails}/>
          <Route exact path='/error' component={Error}/>
          <Route path='/' component={Error}/>
        </Switch>
      </AnimatePresence>
    </GlobalState>
  );
}

export default App;
