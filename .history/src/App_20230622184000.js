import "./App.css";

import React, { useState } from "react";

import Make from "./components/Make";
import Colour from "./components/Colour";
import Result from "./components/Result";
import { Button } from "react-bootstrap";

export default function App() {
  const [page, setpage] = useState(0);

  const PageClick = () => {
    setpage((cur) => cur + 1);
  };

  // const modelPicker = (e) => {
  // setdata(e.target.value);
  // };
  // const Colourpicker = (e) => {
  // setcolour(e.target.value);
  // };
  //
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
          padding: '20px'
          gap: '30px'
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
