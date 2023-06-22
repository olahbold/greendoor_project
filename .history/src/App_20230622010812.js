import "./App.css";

import React, { createContext, useContext } from "react";
import { Button } from "react-bootstrap";

import { FormContextApi } from "./context/FormData";

export default function App() {
  const {data,setdata } = useContext(FormContextApi);
  const modelPicker = (e) => {
    setdata(e.target.value);
  };
  const Colourpicker = (e) => {
    setcolour(e.target.value);
  };
  return (
    <div>
      <Form style={{ display: "flex", flexDirection: "column" }}>
        <FormLabel style={{ color: "white" }}> Make</FormLabel>
        <Form.Select
          aria-label="Default select example"
          onChange={modelPicker}
          value={data.Make}
          size="lg"
        >
          <option value="">Select make</option>
          <option value="Audi">Audi</option>
          <option value="BMW">BMW</option>
          <option value="Vauxhal">Vauxhal</option>
          <option value="Mercedes">Mercedes</option>
          <option value="Peugeot">Peugeot</option>
          <option value="Renault">Renault</option>
        </Form.Select>
      </Form>
      <Form style={{ display: "flex", flexDirection: "column" }}>
        <FormLabel style={{ color: "white" }}> Colour</FormLabel>
        <Form.Select
          aria-label="Default select example"
          onChange={Colourpicker}
          size="lg"
        >
          <option value="">Select Colour</option>
          <option value="Blue">Blue</option>
          <option value="Red">Red</option>
          <option value="Black">Black</option>
          <option value="Orange">Orange</option>
        </Form.Select>
      </Form>

      <button>Next</button>
    </div>
  );
}
