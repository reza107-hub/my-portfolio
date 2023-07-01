import "aos/dist/aos.css";
import { FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center mt-24 p-4 bg-base-300 text-base-content">
      <div>
        <p>&copy; 2023 - All rights reserved.</p>
        <div className="pt-3 flex flex-wrap gap-3">
          <Link
            to={"https://github.com/reza107-hub"}
            className="hover:bg-red-50"
          >
            <button className="btn btn-circle hover:bg-black hover:text-white">
              <FaGithub className="h-5 w-5" />
            </button>
          </Link>
          <Link
            to={"https://www.facebook.com/aminurrashidrezaarr"}
            className="hover:bg-red-50"
          >
            <button className="btn btn-circle text-blue-600 hover:bg-blue-600 hover:text-white">
              <FaFacebook className="h-5 w-5" />
            </button>
          </Link>
          <Link
            to={"https://www.linkedin.com/in/aminur-rashid-reza-213a00266"}
            className="hover:bg-red-50"
          >
            <button className="btn btn-circle text-blue-700 hover:bg-blue-700 hover:text-white">
              <FaLinkedin className="h-5 w-5" />
            </button>
          </Link>
          <Link
            to={"https://www.instagram.com/reza_8k"}
            className="hover:bg-red-50"
          >
            <button className="btn btn-circle text-orange-600 hover:bg-orange-600 hover:text-white">
              <FaInstagramSquare className="h-5 w-5" />
            </button>
          </Link>
          <Link to={"https://twitter.com/Reza6f9"} className="hover:bg-red-50">
            <button className="btn btn-circle text-[#1A8CD8] hover:bg-[#1A8CD8] hover:text-white">
              <FaTwitterSquare className="h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
