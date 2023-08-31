import React, { createContext, useState } from 'react';

const ResultsContext = createContext();

const ResultsProvider = ({ children }) => {
  const [InputData, setInputData] = useState({});

  return (
    <ResultsContext.Provider value={{ InputData, setInputData }}>
      {children}
    </ResultsContext.Provider>
  );
};

export { ResultsContext, ResultsProvider };