import React from "react";
import { Form } from "react-bootstrap";
export default function Multipart() {
  return (
    <div  style={{display:'flex', flexDirection:'row',justifyContent: 'center', g}}>
      <div>
        <Form>
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form>
      </div>
      <div>
        <Form>
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form>
      </div>{" "}
      <div>
        <Form>
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form>
      </div>
    </div>
  );
}
