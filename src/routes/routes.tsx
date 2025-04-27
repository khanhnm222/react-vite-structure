import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login/Login";

const routers = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      {
        path: "auth",
        Component: AuthLayout,
        children: [
          { index: true, path: "login", Component: Login },
        ],
      },
    ],
  },
]);

export default routers;
