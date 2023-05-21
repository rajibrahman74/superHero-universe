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
import AddToys from "../Pages/AddToys/AddToys";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToy from "../Pages/MyToys/UpdateToy/UpdateToy";

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
        path: "blog",
        element: <Blog />,
      },
      {
        path: "mytoys",
        element: (
          <PrivateRouts>
            <MyToys />
          </PrivateRouts>
        ),
      },
      {
        path: "update/:id",
        element: <UpdateToy />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/update/${params.id}`),
      },
      {
        path: "addtoys",
        element: (
          <PrivateRouts>
            <AddToys />
          </PrivateRouts>
        ),
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