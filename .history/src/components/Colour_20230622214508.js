import React, { useContext } from "react";
import { Form, FormLabel } from "react-bootstrap";
import { Wrapper } from "../App";

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
          {map((val) => (
   <option key={val.id} value={val.label}>
     {val.label}
   </option>
 ))}
        
        
        
        </Form.Select>
      </Form>
    </div>
  );
}
