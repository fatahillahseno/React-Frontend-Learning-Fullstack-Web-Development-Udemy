import { createBrowserRouter, Link } from "react-router";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import Tasks from "./pages/Tasks/Tasks.jsx";
import Error404 from "./pages/404/404.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "tasks",
    element: <Tasks />,
  },
  {
    path: "404",
    element: <Error404 />,
  },
]);
