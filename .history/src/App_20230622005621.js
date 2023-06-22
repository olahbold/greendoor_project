import "./App.css";

import React, { createContext, useContext } from "react";
import { Button } from "react-bootstrap";
import UseContexts from "./context/UseContexts";

export default function App() {
 const {} =useContext(con)
  return (
    <div>
      <div className="pages">{make}</div>
      <button>Next</button>
    </div>
  );
}
