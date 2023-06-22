import "./App.css";

import React, {  useState } from "react";



import Make from "./components/Make";
import Colour from "./components/Colour";

export default function App() {
  const [page, setpage] = useState(0);

  // const modelPicker = (e) => {
  // setdata(e.target.value);
  // };
  // const Colourpicker = (e) => {
  // setcolour(e.target.value);
  // };
  //
  const PagesHandler = () => {
    if (page === 0) {
      return <Make />;
    } else if (page === 1) return <Colour />;
  };

  return (
    <div>
      <div>{PagesHandler}</div>

      <button onClick={setpage((currentPage) => currentPage + 1)}>Next</button>
    </div>
  );
}
