import Education from "../Education/Education.JSX";
import Iam from "../Iam/Iam";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div className="space-y-32">
      <Iam />
      <Skills />
      <Education />
    </div>
  );
};

export default Home;
