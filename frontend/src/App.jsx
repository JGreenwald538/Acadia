import "./index.css";

// Import necessary modules from React and react-router-dom
import { useContext } from "react";

// Import React Router modules
import { RouterProvider } from "react-router-dom";

// Import Router
import router from "./routes/routes";

// Import Loader Context
import { useLoading } from "./context/LoaderContext";

// Import Loader
import { Loader } from "./components/index";

const App = () => {
  const { loading } = useLoading();

  return (
    <div className="h-screen">
      {loading && <Loader />}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
