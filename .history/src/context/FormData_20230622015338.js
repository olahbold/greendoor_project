import React, { createContext, useState } from "react";

 const FormContextApi = createContext({});

export const FormContainer = ({ children }) => {
  const [data, setdata] = useState({ Make: "I am good", Colour: "", ColourCode: "" });
  const [Pages, setPages] = useState(0);
  const appPages = ["Page1", "Page2", "Page3"];
  return (
    <FormContextApi.Provider
      value={{ data, setdata, Pages, setPages, appPages }}
    >
      {children}
    </FormContextApi.Provider>
  );
};

export default F