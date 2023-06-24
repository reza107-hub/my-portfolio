import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link"; // Import HashLink
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex font-serif items-center justify-between flex-wrap bg-[#ECF0F3] p-2 md:p-6">
      <span className="font-semibold text-2xl tracking-tight activeStyle">
        My Portfolio
      </span>

      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded hover:text-[#F50057]"
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
          <Link
            smooth
            to="#iam" // Add the hash link
            className="text-black block mt-4 lg:inline-block uppercase lg:mt-0 mr-4"
          >
            Home
          </Link>
          <Link
            smooth
            to="#skill" // Add the hash link
            className="text-black block mt-4 lg:inline-block uppercase lg:mt-0 mr-4"
          >
            Skill
          </Link>
          <Link
            smooth
            to="#education" // Add the hash link
            className="text-black block mt-4 lg:inline-block uppercase lg:mt-0 mr-4"
          >
            Education
          </Link>
          <Link
            smooth
            to="#contact" // Add the hash link
            className="text-black block mt-4 lg:inline-block uppercase lg:mt-0 mr-4"
          >
            Contact
          </Link>
        </div>
        <div>
          <button className="btn-main">
            <span className="text uppercase text-sm">Hire me</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
