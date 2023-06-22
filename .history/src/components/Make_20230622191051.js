import React, { createContext, useContext, useState } from "react";
import {  Form, FormLabel } from "react-bootstrap";



export default function Make() {
  const [make, setMake] = useContext();
  

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      {" "}
      <Form style={{ display: "flex", flexDirection: "column" }}>
        <FormLabel style={{ color: "white" }}> Make</FormLabel>
        <Form.Select aria-label="Default select example" size="lg">
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
  );
}
