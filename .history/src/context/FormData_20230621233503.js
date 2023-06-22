import React, { createContext } from "react";

 export const FormContextApi = createContext({});

export const FormContainer = ({ children }) => {

    
  return (
    <FormContextApi.Provider value={{}}>{children}</FormContextApi.Provider>
  );
};
