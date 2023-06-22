import React, { createContext, useState } from "react";
import { Button, Form, FormLabel } from "react-bootstrap";
import { MakeContext } from "../App";
import { Link } from "react-router-dom";

export default function Make() {
  const [model, setmodel] = useState("");
  const [makeSubmit, setmakeSubmit] = useState("");
  const contextValue = {
    makeSubmit,
  };

  const modelPicker = (e) => {
    setmodel(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setmakeSubmit(model);
    console.log("hello");
  };
  return (
    <MakeContext.Provider value={contextValue}>
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
        <Form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={submitHandler}
          hr
        >
          <FormLabel style={{ color: "white" }}> Make</FormLabel>
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


          <Button onClick={submitHandler} href="/colour">Next</Button>
        </Form>
      </div>
    </MakeContext.Provider>
  );
}
