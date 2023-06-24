import Card from "../../../Components/Card/Card";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Education = () => {
  const educationData = [
    {
      imgLink:
        "https://i.ibb.co/zb4xgMj/323113454-1325448301586663-5004010928649462078-n.jpg",
      duration: "2020 - Present",
      courseName: "BSc in Computer Science and Engineering",
      location: "Bateshwar, Sylhet-3104, Bangladesh",
      admissionLink: "https://metrouni.edu.bd/",
      institute: "Metropolitan University",
    },
    {
      imgLink: "https://i.ibb.co/W5ymkGq/1687528703361.jpg",
      duration: "2017 - 2019",
      courseName: "HSC",
      location: "Golapgonj, Sylhet, Bangladesh",
      admissionLink: "https://www.gmca.edu.bd/",
      institute: "Govt. Muhammad Chowdhury Academy",
    },
    {
      imgLink:
        "https://i.ibb.co/gZ4Yzbt/316256410-5588311717954082-661735122354344018-n.jpg",
      duration: "2015 - 2017",
      courseName: "SSC",
      location: "Charkhai, Beanibazar, Sylhet, Bangladesh",
      admissionLink: "https://www.charkhaihsbeani.edu.bd/",
      institute: "Charkhai High School",
    },
  ];

  return (
    <div id="education">
      <SectionTitle heading={"Education"} subheading={"Academic Background"} />
      <div>
        {educationData.map((education, index) => (
          <Card
            key={index}
            imgLink={education.imgLink}
            duration={education.duration}
            courseName={education.courseName}
            location={education.location}
            admissionLink={education.admissionLink}
            institute={education.institute}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
