import React, { useContext } from "react";


export default function Result() {
  const Make = useContext(Mak);
  return (
    <div>
      <h1>{Make}</h1>
    </div>
  );
}
