/**
 * File: index.js
 * Description: This file serves as the entry point of the React application.
 * It renders the root component using ReactDOM.createRoot and sets up React Router for routing.
 * It also wraps the application with React.StrictMode for improved error detection during development.
 */

// Import necessary modules from React and ReactDOM
import * as React from "react";
import * as ReactDOM from "react-dom/client";

// Import the RouterProvider from react-router-dom
import { RouterProvider } from "react-router-dom";

// Import the router configuration from the routes file
import router from "./routes/routes";

// Import the global CSS styles
import "./index.css";

// Get the DOM element with the id "root" to render the application
const rootElement = document.getElementById("root");

// Use ReactDOM.createRoot to render the root component into the DOM element with id "root"
ReactDOM.createRoot(rootElement).render(
  // Wrap the application with React.StrictMode for improved error detection during development
  <React.StrictMode>
    {/* Use the RouterProvider component to provide the application with routing capabilities */}
    {/* Pass the router configuration as a prop to RouterProvider */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
