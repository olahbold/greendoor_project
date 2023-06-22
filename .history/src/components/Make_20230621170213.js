import React, { useState } from "react";
import { Button, Form, FormLabel } from "react-bootstrap";
const model = useContext(model)
export default function Make() {
  const [model, setmodel] = useState("");
  const modelPicker = (e) => {
    setmodel(e.target.value);
  };
  return (
    <div style={{ padding:'20px', display: 'flex', margin: '20px', alignItems:'center',justifyContent:'center',backgroundColor: 'green'}}>
      {" "}
      <Form style={{ display: "flex", flexDirection: "column" }}>
        <FormLabel style={{color:'white'}}> Make</FormLabel>
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
        <Button href="/colour">Next</Button>
      </Form>
    </div>
  );
}
