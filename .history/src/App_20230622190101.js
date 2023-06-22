import "./App.css";

import React, { useState,createContext } from "react";

import Make from "./components/Make";
import Colour from "./components/Colour";
import Result from "./components/Result";
import { Button } from "react-bootstrap";

export Wrapper = cre

export default function App() {
  const [page, setpage] = useState(0);

  const PageClick = () => {
    setpage((cur) => cur + 1);
  };

 
 
 
 
 
 
 
  const PagesHandler = () => {
    if (page === 0) {
      <Make />;
    }
  };

  return (
    <div
      style={{ backgroundColor: "blueviolet", width: "100%", height: "100vh" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "20px",
          gap: "30px",

          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <div>
          {page === 0 ? <Make /> : page === 1 ? <Colour /> : <Result />}
        </div>

        <div>
          {" "}
          <Button onClick={PageClick}>Next</Button>
        </div>
      </div>
    </div>
  );
}
