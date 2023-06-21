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
          <option value="Audi">Audi</option>
          <option value="BMW">BMW</option>
          <option value="Vauxhal">3</option>
          <option value="Mercedes">4</option>
          <option value="Peugeot">4</option>
          <option value="Renault">4</option>
        </select>
      </form>

      <h1>{make}</h1>
    </div>
  );
}
