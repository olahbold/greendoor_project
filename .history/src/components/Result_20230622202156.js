import React, { useContext } from "react";
import { Wrapper } from "../App";

export default function Result() {
  const { make, color, code } = useContext(Wrapper);
  return (
    <div>
      <h1>{make}</h1>
      <h1>{color}</h1>
      <h1>{code }</h1>
    </div>
  );
}
