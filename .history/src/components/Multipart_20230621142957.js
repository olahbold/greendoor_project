import React, { useState } from "react";
import { Form } from "react-bootstrap";
export default function Multipart() {
  const [model, setmodel] = useState("");
  const [colour, setcolour] = useState("");

  const modelPicker = (e) => {
    setmodel(e.target.value);
  };

  const Colourpicker = (e) => {
    setcolour(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "40px",
      }}
    >
      <div>
        <Form>
          <Form.Select
            aria-label="Default select example"
            onChange={modelPicker}
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
      </div>
      <div>
        <Form>
          <Form.Select
            aria-label="Default select example"
            onChange={Colourpicker}
          >
            <option value="">Select Colour</option>
            <option value="0000FF">Blue</option>
            <option value="#FF0000">Red</option>
            <option value="#000000">Black</option>
            <option value="#FFA500">Orange</option>
          </Form.Select>
        </Form>
      </div>
      
    </div>
  );
}
