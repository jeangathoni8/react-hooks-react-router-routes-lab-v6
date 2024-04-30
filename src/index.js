import React from 'react';
import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

// Create a router instance using createBrowserRouter and passing the routes from 'routes.js'
const router = createBrowserRouter(routes);

// Get the root element from the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the RouterProvider with the router instance
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
