import React, { createContext, useState } from 'react';

export const SayContext = createContext();

export const SayProvider = ({ children }) => {
  const [says, setSays] = useState([]);

  return (
    <SayContext.Provider value={{ says, setSays }}>
      {children}
    </SayContext.Provider>
  );
};

export default SayProvider;