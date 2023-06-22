import "./App.css";

import React, { createContext, useContext } from "react";
import { Button } from "react-bootstrap";
import UseContexts from "./context/UseContexts";

export default function App() {
 const{page,setP}=UseContexts
  return (
    <div>
      <div className="pages">{}</div>
      <button>Next</button>
    </div>
  );
}
