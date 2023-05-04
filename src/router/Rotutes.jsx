import React from "react";

import { createBrowserRouter } from "react-router-dom";
import ChefLayout from "../Layout/ChefLayout";
import LoginLayout from "../Layout/LoginLayout";
import Main from "../Layout/Main";
import ChefAndRecipe from "../pages/ChefAndRecipe/ChefAndRecipe";
import ChefCard from "../pages/Home/ChefCard/ChefCard";
import Login from "../pages/Login";
import Register from "../pages/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <ChefCard></ChefCard>,
        // loader: () => fetch("http://localhost:5000"),
      },
    ],
  },
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "chef",
    element: <ChefLayout></ChefLayout>,
    children: [
      {
        path: "/chef/:id",
        element: <ChefAndRecipe></ChefAndRecipe>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chef/${params.id}`),
      },
    ],
  },
]);

export default router;
