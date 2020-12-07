import React, { createContext, useContext, useState, useEffect } from 'react';

export const SidebarContext = createContext();
export const SidebarProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(
    window.innerWidth < '600' ? false : true
  );

  return (
    <SidebarContext.Provider value={{ sidebar, setSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarValue = () => useContext(SidebarContext);
