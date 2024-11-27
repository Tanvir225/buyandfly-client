import { Outlet } from "react-router-dom";
import Navbar from "../Component/Shared/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
