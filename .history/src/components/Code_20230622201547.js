import React from "react";
import { Form } from "react-bootstrap";
import { Wrapper } from "../App";

export default function Code() {
 const {c} = useContext(Wrapper)

  return (
    <>
      <Form.Label htmlFor="text-input">Code</Form.Label>
      <Form.Control type="text" id="inputPassword5" aria-describedby="text"  onChange={codeInputHandler}/>
    </>
  );
}
