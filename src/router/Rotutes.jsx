import React from "react";

import { createBrowserRouter } from "react-router-dom";
import ChefLayout from "../Layout/ChefLayout";
import LoginLayout from "../Layout/LoginLayout";
import Main from "../Layout/Main";
import Blog from "../pages/Blog/Blog";
import ChefAndRecipe from "../pages/ChefAndRecipe/ChefAndRecipe";
import ChefCard from "../pages/Home/ChefCard/ChefCard";
import Login from "../pages/Login";
import ErrorPage from "../pages/PAGE404/ErrorPage";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: (
          <PrivateRoute>
            <ChefAndRecipe></ChefAndRecipe>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chef-recipe-server-prantosheik.vercel.app/chef/${params.id}`
          ),
      },
    ],
  },
  {
    path: '/blog',
    element: <Blog></Blog>
  }
]);

export default router;
