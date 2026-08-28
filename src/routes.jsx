import { createBrowserRouter, Link } from "react-router";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import Tasks from "./pages/Tasks/Tasks.jsx";
import Error404 from "./pages/404/404.jsx";
import PrivateRoutes from "@/components/PrivateRoutes/PrivateRoutes.jsx";

export const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: "tasks",
        element: <Tasks />,
      },
    ],
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
