import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Make from "./components/Make";
import Colour from "./components/Colour";
import Result from "./components/Result";
<
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/make",
    element: <Make />,
  },
  {
    path: "/colour",
    element: <Colour />,
  },
  {
    path: "/result",
    element: <Result />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
