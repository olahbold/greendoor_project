import "./App.css";

import React, { useState, createContext } from "react";

import Make from "./components/Make";
import Colour from "./components/Colour";
import Result from "./components/Result";
import { Button } from "react-bootstrap";
import Code from "./components/Code";

// This is the App component that handles the state management of the Application
// I used the context Api to manage my state in the Application but for a larger project Redux would have the best for that
// I used the usestate for managing the input state and i passed them to be used on every part of the app
// 



export const Wrapper = createContext({});

export default function App() {
  const [page, setpage] = useState(0);
  const [color, setColor] = useState("");
  const [make, setMake] = useState("");
  const [code, setCode] = useState("");

  const PageTitles = ["Make", "Colour", "Input", "Result"];

  const ButtonDone = "Done";
  const ButtonNext = "Next";

  const NextPage = () => {
    if (page === PageTitles.length - 1) {
      return setpage(0), setColor(""), setMake(""), setCode("");
    }
    setpage((cur) => cur + 1);     
  };

  const Inputhandler = (e) => {
    setMake(e.target.value);
  };

  const colorInputHandler = (e) => {
    setColor(e.target.value);
  };

  const codeInputHandler = (e) => {
    setCode(e.target.value);
  };

  return (
    <div
      style={{ backgroundColor: "blueviolet", width: "100%", height: "100vh" }}
    >
      <Wrapper.Provider
        value={{
          make,
          color,
          Inputhandler,
          colorInputHandler,
          codeInputHandler,
          code,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "20px",
            gap: "30px",

            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <div>
            {page === 0 ? (
              <Make />
            ) : page === 1 ? (
              <Colour />
            ) : page === 2 ? (
              <Code />
            ) : (
              <Result />
            )}
          </div>

          <div>
            <Button onClick={NextPage}>
              {page === 3 ? ButtonDone : ButtonNext}
            </Button>
          </div>
        </div>
      </Wrapper.Provider>
    </div>
  );
}
