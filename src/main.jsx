import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "../components/Layout.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import Home from "../pages/Home.jsx";
import PostDetails from "../pages/PostDetails.jsx";
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";
import UserProfile from "../pages/UserProfile.jsx";
import Authors from "../pages/Authors.jsx";
import CreatePost from "../pages/CreatePost.jsx";
import CategoryPosts from "../pages/CategoryPosts.jsx";
import AuthorPosts from "../pages/AuthorPost.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import EditPost from "../pages/EditPost.jsx";
import Logout from "../pages/Logout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "posts/:id", element: <PostDetails /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "profile/:id", element: <UserProfile /> },
      { path: "authors", element: <Authors /> },
      { path: "create", element: <CreatePost /> },
      { path: "posts/categories/:category", element: <CategoryPosts /> },
      { path: "posts/users/:id", element: <AuthorPosts /> },
      { path: "myposts/:id", element: <Dashboard /> },
      { path: "posts/:id/edit", element: <EditPost /> },
      { path: "logout", element: <Logout /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
