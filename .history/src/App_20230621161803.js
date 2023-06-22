
import "./App.css";
import Multipart from "./components/Multipart";

function App() {
  return <div className="App">
    <Multipart/>
  </div>;
}



const App = createBrowserRouter([
  {
    path: "/",
    element: <Multipart/>
  },
]);

export default App;
