// Import required modules from the React library
import { createContext, useContext, useState } from "react";

// Create a new Context object with an initial value
const LoaderContext = createContext({
  loading: false,
  setLoading: null,
});

// Export the LoadingProvider component
export function LoadingProvider({ children }) {
  // Use the useState Hook to define a loading state variable and its updater function
  const [loading, setLoading] = useState(false);

  // Create an object with the loading state and the setLoading function
  const value = { loading, setLoading };

  // Provide the value to the LoaderContext using the LoaderContext.Provider
  return (
    <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>
  );
}

// Export the custom Hook useLoading
export function useLoading() {
  // Consume the LoaderContext within a functional component using the useContext Hook
  const context = useContext(LoaderContext);

  // If the context is not found, throw an error as useLoading must be used within LoadingProvider
  if (!context) {
    throw new Error("useLoading must be used within LoadingProvider");
  }

  // Return the loading state and the setLoading function
  return context;
}
