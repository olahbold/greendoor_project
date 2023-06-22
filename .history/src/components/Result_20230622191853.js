import React, { useContext } from "react";
import { MakeContext, Wrapper } from "../App";
import FormContextApi from "../context/FormData";

export default function Result() {
  const { make,color} = useContext(Wrapper);
  return (
    <div>
      <h1></h1>
      <h1></h1>
    </div>
  );
}
