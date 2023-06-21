import React from "react";
import { Form } from "react-bootstrap";
export default function Multipart() {
const [model, setmodel] = useState(initialState)
const [colour, setcolour] = useState(initialState)

const modelPicker =(e)=>{

}





  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "40px",
      }}
    >
      <div>
        <Form>
          <Form.Select aria-label="Default select example">
            <option>Select make</option>
            <option value="1">Audi</option>
            <option value="2">BMW</option>
            <option value="3">Vauxhal</option>
            <option value="3">Mercedes</option>
            <option value="3">Peugeot</option>
            <option value="3">Renault</option>
          </Form.Select>
        </Form>
      </div>
      <div>
        <Form>
          <Form.Select aria-label="Default select example">
            <option>Select Colour</option>
            <option value="0000FF">Blue</option>
            <option value="#FF0000">Red</option>
            <option value="#000000">Black</option>
            <option value="#FFA500">Orange</option>
          </Form.Select>
        </Form>
      </div>  
    </div>
  );
}
