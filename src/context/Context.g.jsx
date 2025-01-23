import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const Context = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <GlobalContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

export default Context;
