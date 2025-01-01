import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { scroller } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["iam", "skill", "projects", "education", "contact"];
      const scrollPosition = window.scrollY + 200; // Adjust the scroll position as needed

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);

        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 500,
      smooth: true,
      offset: -100, // Adjust the scroll offset as needed
    });
  };

  return (
    <nav className="sticky top-0 z-50 flex font-serif items-center justify-between flex-wrap font-bold bg-[#ECF0F3] p-2 bg-opacity-40">
      <span className="font-semibold text-2xl tracking-tight text-[#F50057]  mx-auto md:mx-0">
        <Link smooth to={"/"}>
          Reza.<span className="font-thin text-xs">com</span>
        </Link>
      </span>

      <div className="hidden">
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
            to="#iam"
            className={`text-black block mt-4 lg:inline-block uppercase lg:mt-0 mr-4 ${
              activeSection === "iam" ? "activeStyle" : ""
            }`}
            onClick={() => scrollToSection("iam")}
          >
            Home
          </Link>
          <Link
            smooth
            to="#skill"
            className={`text-black block mt-4 lg:inline-block uppercase lg:mt-0 mr-4 ${
              activeSection === "skill" ? "activeStyle" : ""
            }`}
            onClick={() => scrollToSection("skill")}
          >
            Skill
          </Link>
          <Link
            smooth
            to="#projects"
            className={`text-black block mt-4 lg:inline-block uppercase lg:mt-0 mr-4 ${
              activeSection === "projects" ? "activeStyle" : ""
            }`}
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </Link>
          <Link
            smooth
            to="#education"
            className={`text-black block mt-4 lg:inline-block uppercase lg:mt-0 mr-4 ${
              activeSection === "education" ? "activeStyle" : ""
            }`}
            onClick={() => scrollToSection("education")}
          >
            Education
          </Link>
          <Link
            smooth
            to="#contact"
            className={`text-black block mt-4 lg:inline-block uppercase lg:mt-0 mr-4 ${
              activeSection === "contact" ? "activeStyle" : ""
            }`}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </Link>
        </div>
        <div>
          <Link to="#contact">
            <button className="btn-main">
              <span className="text uppercase text-sm">Hire me</span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
