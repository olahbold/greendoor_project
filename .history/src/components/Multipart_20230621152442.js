import React, { useState } from "react";
import { Button, Form, FormLabel } from "react-bootstrap";
import Make from "./Make";
export default function Multipart() {
  const [model, setmodel] = useState("");

  
  
  

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "50px",
        alignItems: "center",
      }}
    ></div>
  );
}
