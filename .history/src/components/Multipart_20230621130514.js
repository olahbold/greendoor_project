import React from "react";

export default function Multipart({ next }) {
  const [make, setmake] = useState("");
  const MakeSubmitHandler = () => {
    e.preventDefault();
    next(make);
  };

  cons
  return (
    <div>
      <form>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </form>
    </div>
  );
}
