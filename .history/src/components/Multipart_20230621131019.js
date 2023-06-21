import React, { useState } from "react";

export default function Multipart({ next }) {
  const [make, setmake] = useState("");
  const MakeSubmitHandler = (e) => {
    e.preventDefault();
    next(make);
  };

  const Valuehandler = (e) => {
    setmake(e.target.value);
  };
  return (
    <div>
      <form onSubmit={MakeSubmitHandler}>
        <select value={make} onChange={Valuehandler}>
          <option value=>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </form>

      <h1>{make}</h1>
    </div>
  );
}
