import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [characteristicsData, setCharacteristicsData] = useState({});

  return (
    <AppContext.Provider value={{ characteristicsData, setCharacteristicsData }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };