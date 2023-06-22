import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { Wrapper } from "../App";

export default function Code() {
  const { codeInputHandler, code } = useContext(Wrapper);

  return (
    <>
      <Form.Label htmlFor="text-input">Code</Form.Label>
      <Form.Control
        type="text"
        aria-describedby="text"
        value={code}
        onChange={codeInputHandler}
      />
    </>
  );
}
