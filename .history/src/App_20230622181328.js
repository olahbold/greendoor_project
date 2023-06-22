import "./App.css";

import React, { useState } from "react";

import Make from "./components/Make";
import Colour from "./components/Colour";

export default function App() {
  const [page, setpage] = useState(0);

  const PageClick=()=>{
    setpage(cur => cur + 1)
  }

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
    } else if (page === 1) <Colour />;
  };

  return (
    <div>
      <div>{PagesHandler()}</div>

      <button onC >Next</button>
    </div>
  );
}
