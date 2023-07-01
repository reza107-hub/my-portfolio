import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({ imgLink, duration, courseName, location, admissionLink, institute }) => {
    useEffect(() => {
      AOS.init({
        duration: 1000,
      });
    }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="300"
      className="flex w-[90%] flex-col mx-auto md:flex-row justify-center items-center md:w-full bg-[#f6f8f9]"
    >
      <div className="flex-1 p-4">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="p-2 bg-[#f6f8f9] shadow-lg rounded-lg md:w-72">
            <div className="overflow-hidden">
              <img
                className="w-72 h-52 object-cover max-w-full rounded-lg transform transition-transform duration-700 hover:scale-110"
                src={imgLink}
                alt="Image"
              />
            </div>
          </div>
          <div className="space-y-7">
            <div>
              <span className="bg-[#F50057] text-white px-2 py-1 rounded-full text-sm">
                {duration}
              </span>
            </div>
            <h4 className="text-3xl font-bold text-gray-600">{courseName}</h4>
            <h6 className="text-xl text-gray-600">{institute}</h6>
            <h6 className="text-lg text-gray-600">{location}</h6>
          </div>
        </div>
      </div>
      <div className="p-4">
        <Link to={admissionLink}>
          <button className="btn-main">
            <span className="text uppercase text-sm font-bold">Admission</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
