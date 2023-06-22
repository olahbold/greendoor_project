import React, { useState } from "react";
import { Button, Form, FormLabel } from "react-bootstrap";
export default function Colour() {
  const [colour, setcolour] = useState("");
  const Colourpicker = (e) => {
    setcolour(e.target.value);
  };
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        margin: "20px",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "green",
      }}
    >
      {" "}
      <Form style={{ display: "flex", flexDirection: "column" }}>
        <FormLabel > Colour</FormLabel>
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
        <Button>Next</Button>
      </Form>
    </div>
  );
}
