import Contact from "../Contact/Contact";
import Education from "../Education/Education.JSX";
import Iam from "../Iam/Iam";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div className="space-y-32">
      <Iam />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
};

export default Home;
