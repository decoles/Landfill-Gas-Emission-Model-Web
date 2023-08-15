import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [characteristicsData, setCharacteristicsData] = useState({});
  const [parametersData, setParametersData] = useState({});
  const [gassesData, setGassesData] = useState({});

  return (
    <AppContext.Provider value={{ characteristicsData, setCharacteristicsData, parametersData, setParametersData, 
    gassesData, setGassesData }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };