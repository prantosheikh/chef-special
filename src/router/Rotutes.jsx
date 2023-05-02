import React from "react";

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
const router = createBrowserRouter([
  {
    path: "/main",
    element: <Main></Main>,
  },
]);

export default router;
