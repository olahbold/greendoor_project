import React,{useState} from "react";

export default function Colour() {
  return (
    <div>
      {" "}
      <Form style={{ display: "flex", flexDirection: "column" }}>
        <FormLabel> Colour</FormLabel>
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
