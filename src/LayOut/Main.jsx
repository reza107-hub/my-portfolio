import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar.jsx";
import Footer from "../Pages/Shared/Footer/Footer.jsx";

const Main = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default Main;
