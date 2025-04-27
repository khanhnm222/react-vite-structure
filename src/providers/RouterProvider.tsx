import { RouterProvider } from "react-router";
import ReactDOM from "react-dom/client";
import routers from "../routes/routes";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(<RouterProvider router={routers} />);
