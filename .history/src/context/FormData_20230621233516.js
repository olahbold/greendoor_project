import React, { createContext } from "react";

 export const FormContextApi = createContext({});

export const FormContainer = ({ children }) => {

    const [d, setd] = useState(initialState)
  return (
    <FormContextApi.Provider value={{}}>{children}</FormContextApi.Provider>
  );
};
