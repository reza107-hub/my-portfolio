import { useEffect } from "react";
import ProgressBar from "../../../Components/ProgressBar/ProgressBar";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const skillsData = [
    { progress: 100,title: "HTML" },
    { progress: 95, title: "CSS" },
    { progress: 80, title: "JAVASCRIPT" },
    { progress: 90, title: "React" },
    { progress: 95, title: "Tailwind" },
    { progress: 95, title: "Bootstrap" },
    { progress: 80, title: "Firebase" },
    { progress: 80, title: "REST API's" },
    { progress: 80, title: "Express JS" },
    { progress: 70, title: "MongoDB" },
    { progress: 60, title: "Next JS" },
    { progress: 60, title: "Node Js" },
  ];

  return (
    <div id="skill" className="mb-10">
      <div data-aos="fade-up" data-aos-delay="300">
        <SectionTitle
          subheading={"Areas of Expertise"}
          heading={"Development Skill"}
        />
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="bg-[#f6f8f9] p-4 rounded-md shadow-lg "
      >
        {skillsData.map((skill, index) => (
          <div key={index} className={`mt-${index === 0 ? 5 : 10} `}>
            <ProgressBar progress={skill.progress} title={skill.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
