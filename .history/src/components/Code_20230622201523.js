import React from "react";
import { Form } from "react-bootstrap";

export default function Code() {
 const context = useContext(contextValue)

  return (
    <>
      <Form.Label htmlFor="text-input">Code</Form.Label>
      <Form.Control type="text" id="inputPassword5" aria-describedby="text"  onChange={codeInputHandler}/>
    </>
  );
}
