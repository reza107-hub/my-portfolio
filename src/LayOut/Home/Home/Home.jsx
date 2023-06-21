import { Helmet } from "react-helmet-async";
import Navbar from "../../../Shared/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Rez | Home</title>
      </Helmet>
      <Navbar />
    </div>
  );
};

export default Home;
