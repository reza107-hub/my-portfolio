import { Link } from "react-router-dom";

const ProjectsCard = ({ project }) => {
  return (
    <div className="card justify-center items-center lg:card-side bg-base-100 p-2 shadow-xl mb-28 text-gray-600">
      <div className="overflow-y-scroll rounded-md h-[70vh] md:w-1/2">
        {project.images?.map((img, index) => (
          <img key={index} src={img} alt={`Image ${index}`} />
        ))}
      </div>
      <div className="card-body md:w-1/2">
        <h2 className="card-title text-[#F50057]">{project.name}</h2>
        <h4 className="font-bold text-gray-600">Features:</h4>
        <ol>
          {project.features?.map((feature, index) => (
            <li key={index}>
              {index + 1}. {feature}
            </li>
          ))}
        </ol>
        <h4 className="font-bold">Technology Used:</h4>
        <p>{project.technology}</p>
        <div className="card-actions justify-center md:justify-end">
          <Link to={project.liveSite}>
            <button className="btn-main">
              <span className="text">Live Site</span>
            </button>
          </Link>
          <Link to={project.clientRepo}>
            <button className="btn-main">
              <span className="text">Client Repo</span>
            </button>
          </Link>
          <Link to={project.serverRepo}>
            <button className="btn-main">
              <span className="text">Server Repo</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
