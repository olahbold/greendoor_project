import React, { useContext } from "react";
import {  Form, FormLabel } from "react-bootstrap";
import { Wrapper } from "../App";
export default function Colour({ make }) {
  const [color, setColor] = useContext(Wrapper);
const colorInputHandler 
  return (
    <div style={{}}>
      {" "}
      <Form style={{ display: "flex", flexDirection: "column" }}>
        <FormLabel style={{ color: "white" }}> Colour</FormLabel>
        <Form.Select aria-label="Default select example" size="lg"  value={color} onChange={e=> setColor(e.target.value)}>
          <option value="">Select Colour</option>
          <option value="Blue">Blue</option>
          <option value="Red">Red</option>
          <option value="Black">Black</option>
          <option value="Orange">Orange</option>
        </Form.Select>
      </Form>
    </div>
  );
}
