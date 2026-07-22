import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/home";
import Login from "@/pages/login";
import Signup from "@/pages/signup";
import Article from "@/pages/article";
import Layout from "@/components/layout/layout";

export const router = createBrowserRouter([
{
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/article/:id",
      element: <Article />,
    },
    {
  path: "/login",
  element: <Login />,
},
{
  path: "/signup",
  element: <Signup />,
},
  ],
},
]);