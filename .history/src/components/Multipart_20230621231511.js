import React, { useState } from "react";

export default function Multipart() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "50px",
        alignItems: "center",
      }}
    >
      {" "}
      <h1>Select your preference</h1>
      <Button href="/Make">Start Here</Button>
    </div>
  );
}
