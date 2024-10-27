import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Error from "../Error";
import Home from "../home/Home";
import Login from "../login/Login";
import Register from "../register/Register";

import PrivateRoute from "../private/PrivateRoute";
import MyCraft from "../myCraft/MyCraft";
import AllArt from "../allArt/AllArt";
import AddCraft from "../addCraft/AddCraft";
import Details from "../details/Details";
import Update from "../update/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:4000/items"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addCraft",
        element: (
          <PrivateRoute>
            {" "}
            <AddCraft></AddCraft>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/myCraft",
        element: (
          <PrivateRoute>
            <MyCraft></MyCraft>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(`http://localhost:4000/items?email=hasanmdtanvir916@gmail.com`),
      },
      {
        path: "/allArt",
        element: <AllArt></AllArt>,
        loader: () => fetch("http://localhost:4000/items"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/items/${params.id}`),
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/items/${params.id}`),
      },
    ],
  },
]);

export default router;
