import React, { useContext } from "react";
import { MakeContext } from "../App";
import { FormContextApi } from "../context/FormData";


export default function Result() {
 const {data} = useContext(FormContextApi)
  return (
    <div>
      <h1>we</h1>
      <h1>Hello</h1>
    </div>
  );
}
