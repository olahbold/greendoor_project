import React, { useState } from "react";
import { Button, Form, FormLabel } from "react-bootstrap";
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
        flexDirection: "column",
        justifyContent: "center",
        gap: "50px",
        alignItems: "center",
      }}
    >
      <div>
        <Form style={{ display: "flex", flexDirection: "column" }}>
          <FormLabel> Make</FormLabel>
          <Form.Select
            aria-label="Default select example"
            onChange={modelPicker}
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


          <Button>Next</Button>
        </Form>
      </div>
      <div>
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
      <div>
        {model && colour && (
          <div>
            <p>
              {" "}
              I have a {model} and the colour is {colour}{" "}
            </p>{" "}
          </div>
        )}
      </div>

      <div>
        {" "}
        {colour === "Red" && (
          <div>
            {" "}
            <h1> THE CAR IS {colour}! NICE!</h1>
          </div>
        )}
      </div>
    </div>
  );
}
