import React, { useState } from "react";
import { Button, Form, FormLabel } from "react-bootstrap";
export default function Colour({ make }) {
  const [colo, setcolour] = useState("");

  return (
    <div style={{}}>
      {" "}
      <Form style={{ display: "flex", flexDirection: "column" }}>
        <FormLabel style={{ color: "white" }}> Colour</FormLabel>
        <Form.Select aria-label="Default select example" size="lg">
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
