import { useEffect } from "react";
import Aos from "aos";
import ProjectsCard from "../../../Components/ProjectsCard/ProjectsCard";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import summerCampHomeDark from "../../../assets/summer camp screenshot/summer-camp-187e8.web.app_.png";
import summerCampHomeLight from "../../../assets/summer camp screenshot/summer-camp-Home.png";
import summerCampDashboard1 from "../../../assets/summer camp screenshot/summer-camp-dashboard_1.png";
import summerCampDashboard2 from "../../../assets/summer camp screenshot/summer-camp-dashboard_2.png";
import summerCampDashboard3 from "../../../assets/summer camp screenshot/summer-camp-dashboard_3.png";
import summerCampDashboard4 from "../../../assets/summer camp screenshot/summer-camp-dashboard_4.png";
import summerCampDashboard5 from "../../../assets/summer camp screenshot/summer-camp-dashboard_5.png";
import summerCampDashboard6 from "../../../assets/summer camp screenshot/summer-camp-dashboard_6.png";
import summerCampDashboard7 from "../../../assets/summer camp screenshot/summer-camp-dashboard_7.png";

import toyHome from "../../../assets/ToyAssemble/toy-home.png";
import toyAddToy from "../../../assets/ToyAssemble/toy-add-toy.png";
import toyAllToy from "../../../assets/ToyAssemble/toy-allToy.png";
import toyMyToy from "../../../assets/ToyAssemble/toy-myToy.png";
import toylogin from "../../../assets/ToyAssemble/toy-login.png";

import bangla_table_home from "../../../assets/BanglaTable/bangla_table_home.png";
import bangla_table_chefDetails from "../../../assets/BanglaTable/bangla_table_chefDetails.png";
import bangla_table_login from "../../../assets/BanglaTable/bangla_table_login.png";

const Projects = () => {
  const projects = [
    {
      name: "CampSporty (A summer camp school)",
      features: [
        "User Registration and Login System.",
        "Displays information about instructors and classes available in the sports academy.",
        "Private portal for students to view and manage classes, make payments, and track payment history.",
        "Private section for instructors to manage classes, including adding new ones, viewing class details, tracking student enrollment, and accessing feedback for denied classes.",
        "Private dashboard accessible only to the administrator, allowing management of classes, users, and approvals/denials with feedback.",
      ],
      technology:
        "HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Daisy Ui, React Router, React Query, Axios, Firebase, JWT, vercel",
      liveSite: "https://summer-camp-187e8.web.app",
      clientRepo:
        "https://github.com/reza107-hub/summer-camp-school-client.git",
      serverRepo: "https://github.com/reza107-hub/summer-camp-school-server",
      images: [
        summerCampHomeLight,
        summerCampHomeDark,
        summerCampDashboard1,
        summerCampDashboard2,
        summerCampDashboard3,
        summerCampDashboard4,
        summerCampDashboard5,
        summerCampDashboard6,
        summerCampDashboard7,
      ],
    },
    {
      name: "ToyAssemble (A Toy market place)",
      features: [
        "Users can search for toys by name. They can also use filters like price range.",
        "Each toy has a dedicated details page showing essential information",
        "Users can create accounts, log in.",
        "There's a user-friendly form for adding new toys to the inventory.",
        "The website is designed to be responsive, ensuring optimal viewing on desktop and mobile devices with different screen sizes.",
      ],
      technology:
        "HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Daisy Ui, Firebase, vercel",
      liveSite: "https://assaignment11-63a57.web.app",
      clientRepo: "https://github.com/reza107-hub/toyAssemble-client.git",
      serverRepo: "https://github.com/reza107-hub/toyAssemble-server.git",
      images: [toyHome, toyAddToy, toyAllToy, toyMyToy, toylogin],
    },
    {
      name: "Bangla Table",
      features: [
        "Home page has featured chef information, Recipes gallery.",
        "Users can click on any chef to view their details and top recipe.",
        "The blog page displays different blog posts related about some react interview question.",
        "Users can also view the making process of the top recipe.",
        "The application is user-friendly and visually appealing, making it easy for users to navigate and find the information they need.",
      ],
      technology:
        "HTML, CSS, JavaScript, React.js, Express.js, Rest API's, Tailwind CSS, Daisy Ui, Firebase, vercel",
      liveSite: "https://chef-assignment.web.app",
      clientRepo: "https://github.com/reza107-hub/BanglaTable.git",
      serverRepo: "https://github.com/reza107-hub/BanglaTable-server-.git",
      images: [bangla_table_home, bangla_table_chefDetails, bangla_table_login],
    },
  ];

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div id="projects">
      <SectionTitle heading={"Projects"} subheading={"Innovative Ventures"} />

      {projects.map((project, index) => (
        <div key={index} data-aos="fade-up" data-aos-delay="300">
          <ProjectsCard project={project} />
        </div>
      ))}
    </div>
  );
};

export default Projects;
