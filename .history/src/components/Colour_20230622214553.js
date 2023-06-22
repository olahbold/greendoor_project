import React, { useContext } from "react";
import { Form, FormLabel } from "react-bootstrap";
import { Wrapper } from "../App";
import { ColorData } from "./Data";

// This is the select your Make component
export default function Colour() {
  const { color, colorInputHandler } = useContext(Wrapper);

  return (
    <div style={{}}>
      {" "}
      <Form style={{ display: "flex", flexDirection: "column" }}>
        <FormLabel style={{ color: "white" }}> Colour</FormLabel>
        <Form.Select
          aria-label="Default select example"
          size="lg"
          value={color}
          onChange={colorInputHandler}
          required
        >
          <option value="">Select Colour</option>
          {ColorData.map((col) => (
   <option key={col} value={val.label}>
     {val.label}
   </option>
 ))}
        
        
        
        </Form.Select>
      </Form>
    </div>
  );
}
