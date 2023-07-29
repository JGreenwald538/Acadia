/**
 * File: index.js
 * Description: This file serves as the entry point of the React application.
 * It renders the root component using ReactDOM.createRoot and sets up React Router for routing.
 * It also wraps the application with React.StrictMode for improved error detection during development.
 */

// Import necessary modules from React and ReactDOM
import * as React from "react";
import * as ReactDOM from "react-dom/client";

// Import the global CSS styles
import "./index.css";

// Get the DOM element with the id "root" to render the application
const rootElement = document.getElementById("root");

// Import Loader Context Provider
import { LoadingProvider } from "./context/LoaderContext";

// Import necessary modules from react-toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import App.jsx
import App from "./App";

// Use ReactDOM.createRoot to render the root component into the DOM element with id "root"
ReactDOM.createRoot(rootElement).render(
  // Wrap the application with React.StrictMode for improved error detection during development
  <React.StrictMode>
    <LoadingProvider>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </LoadingProvider>
  </React.StrictMode>
);
