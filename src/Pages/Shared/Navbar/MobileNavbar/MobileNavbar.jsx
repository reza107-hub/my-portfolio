import { useEffect, useState } from "react";
import { FaServer, FaBriefcase } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineCastForEducation } from "react-icons/md";
import "./MobileNavbar.css"; // Import the CSS file for styling

const MobileNavbar = () => {
  const [activeSection, setActiveSection] = useState("");

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

  return (
    <div className="flex justify-center">
      <div className="fixed bottom-2 mx-auto">
        <ul className="menu menu-horizontal bg-black bg-opacity-20 rounded-box mt-6">
          <li>
            <a
              href="#iam"
              className={`tooltip ${
                activeSection === "iam" ? "activeStyleForMobNav" : ""
              }`}
              data-tip="Home"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#skill"
              className={`tooltip ${
                activeSection === "skill" ? "activeStyleForMobNav" : ""
              }`}
              data-tip="Skill"
            >
              <FaServer className="h-5 w-5" />
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`tooltip ${
                activeSection === "projects" ? "activeStyleForMobNav" : ""
              }`}
              data-tip="Projects"
            >
              <FaBriefcase className="h-5 w-5" />
            </a>
          </li>
          <li>
            <a
              href="#education"
              className={`tooltip ${
                activeSection === "education" ? "activeStyleForMobNav" : ""
              }`}
              data-tip="Education"
            >
              <MdOutlineCastForEducation className="h-5 w-5" />
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`tooltip ${
                activeSection === "contact" ? "activeStyleForMobNav" : ""
              }`}
              data-tip="Contact"
            >
              <AiOutlineMail className="h-5 w-5" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavbar;
