import React, { useContext } from "react";
import { MakeContext } from "../App";


export default function Result() {
  const Make = useContext(MakeContext);
  return (
    <div>
      <h1>{Make}</h1>
      
    </div>
  );
}
