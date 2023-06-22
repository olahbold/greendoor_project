import "./App.css";
import Multipart from "./components/Multipart";
import { createBrowserRouter } from "react-router-dom";
const App = createBrowserRouter([
  {
    path: "/home",
    element: <div>hello world</div>
  },
]);

export default App;
