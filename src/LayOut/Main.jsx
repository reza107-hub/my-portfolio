import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar.jsx";

const Main = () => {
  return (
    <div>
      <Helmet>
        <title>Rez | Home</title>
      </Helmet>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
