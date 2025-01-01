import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const skills = [
  {
    name: "HTML",
    image: "https://i.postimg.cc/TPB0GX8p/html.webp",
  },
  {
    name: "CSS",
    image: "https://cdn-icons-png.flaticon.com/512/919/919826.png",
  },
  {
    name: "JAVASCRIPT",
    image:
      "https://www.pngitem.com/pimgs/m/116-1167737_logo-javascript-pattern-copyright-framework-free-download-javascript.png",
  },
  {
    name: "TYPESCRIPT",
    image:
      "https://w7.pngwing.com/pngs/74/362/png-transparent-typescript-plain-logo-icon-thumbnail.png",
  },
  {
    name: "React",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRom9_e0a7FrC1bxw6QHgz1-WANjmqN6FZjA&s",
  },
  {
    name: "Tailwind",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2leb6IMKUA18T1CxSAWOq84VmLw4cb17EA&s",
  },
  {
    name: "Firebase",
    image:
      "https://w7.pngwing.com/pngs/246/288/png-transparent-firebase-hd-logo-thumbnail.png",
  },
  {
    name: "REST API",
    image: "https://i.postimg.cc/90Pz0yrv/image.webp",
  },
  {
    name: "Node Js",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png",
  },
  {
    name: "Express JS",
    image: "https://i.postimg.cc/hGv0wj7T/express.webp",
  },
  {
    name: "MongoDB",
    image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg",
  },
  {
    name: "Mongoose",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*rL8Buu7o6jnG-TYV1WubeQ.png",
  },
  {
    name: "Next JS",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZoRUWencQI6KTVVh1WgYY5adDbjDrX5xvlw&s",
  },
];

const SkillsSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration
      once: true, // Trigger animation only once
    });
  }, []);

  return (
    <div id="skill" className="bg-gray-100 p-6">
      <div data-aos="fade-up">
        <SectionTitle
          subheading={"Areas of Expertise"}
          heading={"Development Skills"}
        />
      </div>
      <div data-aos="fade-up" className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center transform transition-transform duration-700 hover:scale-110"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-20 h-20 object-contain mb-4"
              />
              <p className="text-lg font-medium text-[#F50057]">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
