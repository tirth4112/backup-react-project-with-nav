import React, { createContext, useContext, useState } from 'react';

const ActiveRouteContext = createContext();

export const ActiveRouteProvider = ({ children }) => {
  const [activeRoute, setActiveRoute] = useState('');

  return (
    <ActiveRouteContext.Provider value={{ activeRoute, setActiveRoute }}>
      {children}
    </ActiveRouteContext.Provider>
  );
};

 export const useActiveRouteContext = () => {
  return useContext(ActiveRouteContext);
};

// export default useActiveRouteContext
