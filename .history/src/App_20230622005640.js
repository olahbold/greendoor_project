import "./App.css";

import React, { createContext, useContext } from "react";
import { Button } from "react-bootstrap";
import UseContexts from "./context/UseContexts";
import { FormContextApi } from "./context/FormData";

export default function App() {
 const {} =useContext(FormContextApi)
  return (
    <div>
      <div className="pages">{make}</div>
      <button>Next</button>
    </div>
  );
}
