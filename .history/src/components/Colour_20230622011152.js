import React, { useState } from "react";
import { Button, Form, FormLabel } from "react-bootstrap";
export default function Colour({ make }) {
  const [colour, setcolour] = useState("");

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
      
    </div>
  );
}
