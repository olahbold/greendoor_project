import "./App.css";

import React, { createContext, useContext } from "react";
import { Button } from "react-bootstrap";

import { FormContextApi } from "./context/FormData";

export default function App() {
 const {make} =useContext(FormContextApi)
  return (
    <div>
      <div className="pages">{}</div>
      <button>Next</button>
    </div>
  );
}
