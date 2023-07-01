import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar.jsx";
import Footer from "../Pages/Shared/Footer/Footer.jsx";
import MobileNavbar from "../Pages/Shared/Navbar/MobileNavbar/MobileNavbar.jsx";

const Main = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
      <div className="md:hidden">
        <MobileNavbar />
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default Main;
