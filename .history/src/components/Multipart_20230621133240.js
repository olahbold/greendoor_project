import React, { useState } from "react";

function Form1({ next }) {
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
          <option value="Vauxhal">Vauxhal</option>
          <option value="Mercedes">Mercedes</option>
          <option value="Peugeot">Peugeot</option>
          <option value="Renault">Renault</option>
        </select>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

function Form2({ make, model }) {
  const [colour, setcolour] = useState("");
  const MakeSubmitHandler = (e) => {
    e.preventDefault();
    next(model);
  };
  const Valuehandler = (e) => {
    setcolour(e.target.value);
  };
  return (
    <div>
      <form onSubmit={MakeSubmitHandler}>
        <select value={colour} onChange={Valuehandler}>
          <option value="">Select your colour</option>

          {make === "audi" && (
            <div>
              <option></option>
              <option></option>
            </div>
          )}
        </select>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

function Form3() {
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
          <option value="Vauxhal">Vauxhal</option>
          <option value="Mercedes">Mercedes</option>
          <option value="Peugeot">Peugeot</option>
          <option value="Renault">Renault</option>
        </select>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default function Multipart() {
  return (
    <div>
      <Form1 />
      <Form2 />
      <Form3 />
    </div>
  );
}
