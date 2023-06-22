import "./App.css";
import Multipart from "./components/Multipart";
import { createBrowserRouter } from "react-router-dom";
const App = createBrowserRouter([
  {
    path: "/h",
    element: <Multipart />,
  },
]);

export default App;
