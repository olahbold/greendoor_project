import React, { useContext } from "react";
import { Wrapper } from "../App";

export default function Result() {
  const { make, color, code } = useContext(Wrapper);
  return (
    <div>
      <h1>
        {" "}
        I have a {make} and the colour is {color}
      </h1>

      <div>{color === "red" && <h1> THE CAR IS RED! NICE!</h1>}</div>
    </div>
  );
}
