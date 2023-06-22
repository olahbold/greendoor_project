import "./App.css";

import React, { createContext, useContext } from "react";
import { Button } from "react-bootstrap";

export default function App() {
  const datainfo =useContext({})
  return (
    <div>
      <div className="pages">{}</div>
      <button>Next</button>
    </div>
  );
}
