import React, { createContext } from 'react';

import propertiesData from '../Data/properties.data';

export const GlobalContext = createContext(propertiesData);

let allProperties = [];
const states = ['ca', 'co', 'ny'];
states.map(abbrev => {
  propertiesData[abbrev].map(properties => allProperties.push(properties));
});

export const StatesContext = createContext(allProperties);

export default function GlobalState({ children }) {
  return (
    <GlobalContext.Provider value={propertiesData}>
      { children }
    </GlobalContext.Provider>
  )
}
