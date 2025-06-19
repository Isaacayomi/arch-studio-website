import { Link } from "react-router-dom";

const Project = ({ src, title }) => {
  return (
    <div className="max-w-[35.75rem] mx-auto mt-[2.69rem] relative px-[2rem]">
      <img className="w-full mx-auto" src={src} alt="project" />
      <div className="absolute top-0  pl-[1.5rem]">
        <p className="mt-[12.5rem] text-white font-spartan text-[2rem] font-bold leading-[2.5rem]">
          {title}
        </p>
        <Link
          to="/portfolio"
          className="text-[1.125rem] font-spartan font-medium leading-[1.5rem] text-white"
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
};
export default Project;
