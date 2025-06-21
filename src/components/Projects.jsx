import { Link } from "react-router-dom";

const Project = ({ src, title, num }) => {
  return (
    <div className="max-w-[35.75rem] mx-auto mt-[2.69rem] relative px-[2rem] h-auto md:max-w-[42rem] md:h-[15rem]">
      <img
        className="relative w-full mx-auto md:mb-[1.5rem] md:h-full"
        src={src}
        alt="project"
      />
      <span className="hidden md:block absolute top-0 right-24 text-white font-spartan text-[15.625rem] font-bold leading-[12.5rem] tracking-[-0.3125rem] opacity-50 pt-[1.5rem] h-[12.5rem] ">
        {num}
      </span>
      <div className="relative "></div>

      <div className="absolute bottom-0 pl-[1.5rem] md:bottom-[2.3rem] md:pl-[2.5rem]">
        <p className="mt-[6rem] md:mt-[12.5rem] text-white font-spartan text-[2rem] font-bold leading-[2.5rem]">
          {title}
        </p>
        <Link
          to="/portfolio"
          className="text-[1.125rem]  font-spartan font-medium leading-[1.5rem] text-white"
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
};
export default Project;
