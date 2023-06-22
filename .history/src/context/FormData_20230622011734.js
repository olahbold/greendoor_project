import React, { createContext, useState } from "react";

export const FormContextApi = createContext({});

export const FormContainer = ({ children }) => {
  const [data, setdata] = useState({ Make: "", Colour: "", ColourCode: "" });
  const [Pages, setPages] = useState(0]);
  const appPages = ["Page1", "Page2", "Page3"];
  return (
    <FormContextApi.Provider
      value={{ data, setdata, Pages, setPages, appPages }}
    >
      {children}
    </FormContextApi.Provider>
  );
};
