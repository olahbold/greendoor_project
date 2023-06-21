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
          <option value='Audi'>1</option>
          <option value=>2</option>
          <option value={}>3</option>
          <option value={}>4</option>
          <option value={}>4</option>
          <option value={}>4</option>

        </select>
      </form>

      <h1>{make}</h1>
    </div>
  );
}
