import { createBrowserRouter } from "react-router";
import { AuthLayout } from "../layouts";
import { lazy } from "react";

const HomePage = lazy(() => import('../pages/Home/Home'));
const AboutPage = lazy(() => import('../pages/About/About'));
const LoginPage = lazy(() => import('../pages/Login/Login'));

const routers = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      {
        path: "auth",
        Component: AuthLayout,
        children: [
          { index: true, path: "login", Component: LoginPage },
        ],
      },
    ],
  },
]);

export default routers;
