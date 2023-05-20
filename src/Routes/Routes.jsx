import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Blog from "../Pages/Blogs/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Register from "../Pages/SingUp/Register";
import HeroDetails from "../Pages/Shared/HeroDetails/HeroDetails";
import AllToys from "../Pages/AllToys/AllToys";
import PrivateRouts from "./PrivateRouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/herotoys"),
      },
      {
        path: "herocategories/:id",
        element: (
          <PrivateRouts>
            <HeroDetails />
          </PrivateRouts>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/herotoys/${params.id}`),
      },
      {
        path: "alltoys",
        element: <AllToys />,
        loader: () => fetch("http://localhost:5000/herotoys"),
      },
      {
        path: "alltoys/:id",
        element: (
          <PrivateRouts>
            <HeroDetails />
          </PrivateRouts>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/herotoys/${params.id}`),
      },

      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Register />,
      },
    ],
  },
]);

export default router;