import React from "react";
import { Form } from "react-bootstrap";
export default function Multipart() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "40px",
      }}
    >
      <div>
        <Form>
          <Form.Select aria-label="Default select example">
            <option>Select make</option>
            <option value="1">Audi</option>
            <option value="2">BMW</option>
            <option value="3">Vauxhal</option>
            <option value="3">Mercedes</option>
            <option value="3">Peugeot</option>
            <option value="3">Renault</option>
          </Form.Select>
        </Form>
      </div>
      <div>
        <Form>
          <Form.Select aria-label="Default select example">
            <option>Select Colour</option>
            <option value="0000FF">Blue</option>
            <option value="#FF0000">Red</option>
            <option value="#000000">Black</option>
            <option value="">Orange</option>
          </Form.Select>
        </Form>
      </div>{" "}
      <div>
        <Form>
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">#FF0000</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form>
      </div>
    </div>
  );
}
