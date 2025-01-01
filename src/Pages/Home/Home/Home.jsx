import Contact from "../Contact/Contact";
import Education from "../Education/Education.JSX";
import Iam from "../Iam/Iam";
import Projects from "../Projects/Projects";
import SkillsSection from "../Skills/SkillsSection";

const Home = () => {
  return (
    <div className="space-y-32">
      <Iam />
      {/* <Skills /> */}
      <SkillsSection />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
};

export default Home;
