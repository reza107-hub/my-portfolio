import myImg from "../../../assets/ggl.jpg";
import { HashLink } from "react-router-hash-link";
import resumePdf from "../../../assets/resume-22-6-23.pdf";
const Iam = () => {
  return (
    <section id="iam" className="flex md:flex-row flex-col-reverse gap-10 mt-4">
      <div className="flex flex-col">
        <div className="flex flex-col bg-[#f6f8f9] p-4 pb-10 rounded-md shadow-lg transform-gpu hover:translate-y-[-5px] transition-transform duration-700">
          <div className="rounded-full w-14 h-14 bg-[#F50057] bg-opacity-50 shadow-xl text-white m-5 border flex justify-center items-center">
            <div className="rounded-full w-10 h-10 bg-[#F50057] border-[#F50057] text-white border flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <h2 className="text-5xl font-bold text-gray-600">
              {`Hi, I'm`} <span className="text-[#F50057]">Reza</span>
            </h2>
            <p className="text-gray-500 mt-3">
              Web Developer skilled in JavaScript and React.
            </p>
            <div className="space-y-2 mt-4">
              <div className="flex items-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#F50057]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>

                <span className="ml-2">Web Developer</span>
              </div>
              <div className="flex items-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#F50057]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>

                <span className="ml-2">rashidaminur104@gmail.com</span>
              </div>
              <div className="flex items-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#F50057]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>

                <span className="ml-2">+8801576450416</span>
              </div>
              <div className="flex items-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#F50057]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>

                <span className="ml-2">Sylhet, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-[#f6f8f9] p-4 shadow-lg rounded-md mt-16 flex-grow">
          <div className="pt-[10%]">
            <p className="mb-4 font-sans text-lg text-center lg:text-left font-medium">
              Download my Resume
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center mt-4 gap-10">
              <a href={resumePdf} download>
                <button className="btn-main">
                  <span className="text uppercase text-sm font-bold">
                    Download Resume
                  </span>
                </button>
              </a>
              <HashLink to={"#contact"}>
                <button className="btn-second">
                  <span className="text uppercase text-sm font-bold">
                    Contact me
                  </span>
                </button>
              </HashLink>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 bg-[#f6f8f9] shadow-lg rounded-lg">
        <div className="overflow-hidden">
          <img
            className="max-w-full rounded-lg transform transition-transform duration-700 hover:scale-110"
            src={myImg}
            alt="Image"
          />
        </div>
      </div>
    </section>
  );
};

export default Iam;
