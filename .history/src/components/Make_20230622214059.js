import React, { useContext } from "react";
import { Form, FormLabel } from "react-bootstrap";
import { Wrapper } from "../App";
import { Data } from "./Data";

// This is the select your Make component

export default function Make() {
  const { make, Inputhandler } = useContext(Wrapper);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {" "}
      <Form style={{ display: "flex", flexDirection: "column" }}>
        <FormLabel style={{ color: "white" }}> Make</FormLabel>
        <Form.Select
          aria-label="Default select example"
          size="lg"
          value={make}
          onChange={Inputhandler}
          required
        >
          <option value="">Select your model</option>
          {Data.map((val) => (
            <option  key= {val.id} value={val.label}>{val.label}</option>
          ))}
        </Form.Select>
      </Form>
    </div>
  );
}
