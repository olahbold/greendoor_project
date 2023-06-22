import "./App.css";

import React, { createContext, useContext } from "react";
import { Button } from "react-bootstrap";
import UseContexts from "./context/UseContexts";

export default function App() {
 const{Page,setPage}=UseContexts()
  return (
    <div>
      <div className="pages">{page}</div>
      <button>Next</button>
    </div>
  );
}
