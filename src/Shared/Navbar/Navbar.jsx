import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex font-serif items-center justify-between flex-wrap bg-white p-6">
      <div data-tip="reza" className="flex items-center flex-shrink-0 text-white mr-6">
        <img
          className="w-12"
          src="https://i.ibb.co/ngg37SM/In-Shot-20211104-190909311.png"
          alt="reza"
        />
      </div>

      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-200 hover:border-teal-400"
          onClick={toggleMenu}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className={`w-full ${
          isMenuOpen ? "block" : "hidden"
        } lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow mr-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "activeStyle block text-xl mt-4 lg:inline-block lg:mt-0 mr-4"
                : "text-black block mt-4 lg:inline-block text-lg lg:mt-0 mr-4"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "activeStyle block text-xl mt-4 lg:inline-block lg:mt-0 mr-4"
                : "text-black block mt-4 lg:inline-block text-lg lg:mt-0 mr-4"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "activeStyle block text-xl mt-4 lg:inline-block lg:mt-0 mr-4"
                : "text-black block mt-4 lg:inline-block text-lg lg:mt-0 mr-4"
            }
          >
            Contact
          </NavLink>
        </div>
        <div>
          <button className="navbar-btn">
            <span className="text uppercase text-sm">Hire me</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
