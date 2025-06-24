import SERAPH_STATION from "../assets/images/image-seraph.jpg";
import EEBOX from "../assets/images/image-eebox.jpg";
import FEDERAL from "../assets/images/image-federal.jpg";
import PROJECT_SOL_DESKTOP from "../assets/images/project-sol-desktop.png";
import PROJECT_PROTOTYPE_DESKTOP from "../assets/images/project-prototype-desktop.png";
import PROJECT_TOWER_DESKTOP from "../assets/images/project-tower-desktop.png";
import EDELWEISS from "../assets/images/image-edelweiss.jpg";
import NETCRY from "../assets/images/image-netcry.jpg";
import HYPERS from "../assets/images/image-hypers.jpg";
import SXIV from "../assets/images/image-sxiv.jpg";
import TRINITY_BANK from "../assets/images/image-trinity.jpg";
import PROJECT_PARMOUR_DESKTOP from "../assets/images/image-paramour.svg";
import Project from "./Projects";

const projects = [
  {
    src: SERAPH_STATION,
    description: "September 2019",
    title: "Seraph Station",
  },

  {
    src: EEBOX,
    description: "August 2017",
    title: "Eebox Building",
  },

  {
    src: FEDERAL,
    description: "March 2017",
    title: "Federal II Tower",
  },

  {
    src: PROJECT_SOL_DESKTOP,
    description: "January 2016",
    title: "Project Del Sol",
  },

  {
    src: PROJECT_PROTOTYPE_DESKTOP,
    description: "October 2015",
    title: "Project Prototype",
  },

  {
    src: PROJECT_TOWER_DESKTOP,
    description: "April 2015",
    title: "228B TOWER",
  },

  {
    src: EDELWEISS,
    description: "December 2014",
    title: "Grand Edelweiss",
  },

  {
    src: NETCRY,
    description: "August 2012",
    title: "NetCry Tower",
  },

  {
    src: HYPERS,
    description: "January 2012",
    title: "Hypers",
  },
  {
    src: SXIV,
    description: "March 2011",
    title: "SXIV Tower",
  },

  {
    src: TRINITY_BANK,
    description: "September 2010",
    title: "Trinity Bank Tower",
  },

  {
    src: PROJECT_PARMOUR_DESKTOP,
    description: "February 2008",
    title: "Project Paramour",
  },
];

const ProjectList = () => {
  return (
    <>
      {projects.map(({ src, description, title }, i) => (
        <div key={i} className="w-full md:w-[43rem] lg:w-[22rem] lg:mb-10">
          <Project
            className="bottom-8"
            src={src}
            description={description}
            title={title}
          />
        </div>
      ))}
    </>
  );
};

export default ProjectList;
