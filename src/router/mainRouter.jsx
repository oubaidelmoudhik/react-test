import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import About from "../pages/About";
import Home from "../pages/Home";

const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <h1>Hello login</h1>,
      },
    ],
  },
];
export const router = createBrowserRouter(routes);
