import React, { useState, useContext } from "react";
import { Button, Form, FormLabel } from "react-bootstrap";

export default function Make() {
  const MakeContext = useContext(model);
  const [model, setmodel] = useState("");
  const [state, setstate] = useState(initialState)
  const modelPicker = (e) => {
    setmodel(e.target.value);
  };

const submitHandler=(e)=>{
e.preventDefault()
}
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
        <FormLabel style={{ color: "white" }}> Make</FormLabel>
        <Form.Select
          aria-label="Default select example"
          onChange={modelPicker}
          size="lg"
          value={model}
        >
          <option value="">Select make</option>
          <option value="Audi">Audi</option>
          <option value="BMW">BMW</option>
          <option value="Vauxhal">Vauxhal</option>
          <option value="Mercedes">Mercedes</option>
          <option value="Peugeot">Peugeot</option>
          <option value="Renault">Renault</option>
        </Form.Select>
        <Button href="/colour">Next</Button>
      </Form>
    </div>
  );
}
