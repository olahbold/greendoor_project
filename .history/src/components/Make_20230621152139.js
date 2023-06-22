import React from "react";

export default function Make() {
    const [model, setmodel] = useState("");
  return (
    <div>
      {" "}
      <Form style={{ display: "flex", flexDirection: "column" }}>
        <FormLabel> Make</FormLabel>
        <Form.Select
          aria-label="Default select example"
          onChange={modelPicker}
          size="lg"
        >
          <option value="">Select make</option>
          <option value="Audi">Audi</option>
          <option value="BMW">BMW</option>
          <option value="Vauxhal">Vauxhal</option>
          <option value="Mercedes">Mercedes</option>
          <option value="Peugeot">Peugeot</option>
          <option value="Renault">Renault</option>
        </Form.Select>
        <Button>Next</Button>
      </Form>
    </div>
  );
}
