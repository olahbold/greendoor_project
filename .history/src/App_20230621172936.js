import "./App.css";

import { createBrowserRouter } from "react-router-dom";

import React, from "react";
import { Button } from "react-bootstrap";

  export const MakeContext = createContext();
 
export default function App() {
  return (
    <div>
      <h1>Select your preference</h1>
      <Button href="/Make">Start Here</Button>
    </div>
  );
}
