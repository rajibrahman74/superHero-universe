import Foooter from "../Pages/Shared/Foooter/Foooter";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Foooter />
    </div>
  );
};

export default Main;