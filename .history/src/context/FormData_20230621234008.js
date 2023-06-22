import React, { createContext } from "react";

export const FormContextApi = createContext({});

export const FormContainer = ({ children }) => {
  const [data, setdata] = useState({ Make: "", Colour: "", ColourCode: "" });
  const [Pages, setPages] = useState(appPages[]);
  const appPages = ["Page1", "Page2", "Page3"];
  return (
    <FormContextApi.Provider value={{}}>{children}</FormContextApi.Provider>
  );
};