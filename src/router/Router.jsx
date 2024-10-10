import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
 
const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      }

    //   {
    //     path: "/products/:id", // Dynamic route to access products by ID
    //     element: <Products />,
    //   }
    ]);
    export default Router;