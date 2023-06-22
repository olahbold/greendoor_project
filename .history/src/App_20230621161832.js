import "./App.css";
import Multipart from "./components/Multipart";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const App = createBrowserRouter([
  {
    path: "/",
    element: <Multipart />,
  },
]);

export default App;
