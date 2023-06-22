import "./App.css";

import React, { createContext, useContext } from "react";
import { Button } from "react-bootstrap";
import UseContexts from "./context/UseContexts";

export default function App() {
 const{pa}=UseContexts()
  return (
    <div>
      <div className="pages">{Pages}</div>
      <button>Next</button>
    </div>
  );
}
