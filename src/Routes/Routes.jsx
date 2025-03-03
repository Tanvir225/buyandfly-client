import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Prices from "../Pages/Prices/Prices";
import Details from "../Pages/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/prices",
        element: <Prices></Prices>,
      },
      {
        path: "/details",
        element: <Details></Details>,
      },
    ],
  },
]);

export default router;
