import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Booksdisplay from "../Pages/ Booksdisplay";
import BookDetails from "../Pages/BookDetails";
import Favorites from "../component/Favorites";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/booksdisplay",
    element: <Booksdisplay />,
  },
  {
    path: "/bookdetails/:id",
    element: <BookDetails />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
]);
export default Router;
