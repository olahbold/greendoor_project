import "./App.css";

import React, { createContext, useContext } from "react";
import { Button } from "react-bootstrap";

import { FormContextApi } from "./context/FormData";

export default function App() {
  const { data } = useContext(FormContextApi);
  const modelPicker = (e) => {
    setmodel(e.target.value);
  };
  const Colourpicker = (e) => {
    setcolour(e.target.value);
  };
  return (
    <div>
      <div className="pages">{data}</div>
      
      
      
      
      
      
      
      <button>Next</button>
    </div>
  );
}
