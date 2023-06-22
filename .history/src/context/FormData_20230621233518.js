import React, { createContext } from "react";

 export const FormContextApi = createContext({});

export const FormContainer = ({ children }) => {

    const [data, setdata] = useState(initialState)
  return (
    <FormContextApi.Provider value={{}}>{children}</FormContextApi.Provider>
  );
};
