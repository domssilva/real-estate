import React, { createContext } from 'react';

import propertiesData from '../Data/properties.data';

export const GlobalContext = createContext(propertiesData);

export default function GlobalState({ children }) {
  return (
    <GlobalContext.Provider value={propertiesData}>
      { children }
    </GlobalContext.Provider>
  )
}
