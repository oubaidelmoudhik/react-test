import { RouterProvider } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { router } from "./router/mainRouter";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
