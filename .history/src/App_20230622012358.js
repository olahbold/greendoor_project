import "./App.css";

import React, { createContext, useContext } from "react";
import { Button } from "react-bootstrap";

import { FormContextApi } from "./context/FormData";
import Make from "./components/Make";
import Colour from "./components/Colour";

export default function App() {
  const { data, setdata, Pages, setPages } = useContext(FormContextApi);
  const modelPicker = (e) => {
    setdata(e.target.value);
  };
  const Colourpicker = (e) => {
    setcolour(e.target.value);
  };

  const PagesHandler = () => {
    if (Pages === 0) {
      return <Make />;
    } else if (Pages === 1) return <Colour />;
  };

  return (
    <div>
<div>
  {PagesHandler()}
</div>


      <button onClick={setPages((currentPage) => currentPage + 1)}>Next</button>
    </div>
  );
}
