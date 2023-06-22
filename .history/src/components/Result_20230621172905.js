import React, { useContext } from "react";


export default function Result() {
  const Make = useContext(MakeContext);
  return (
    <div>
      <h1>{Make}</h1>
    </div>
  );
}
