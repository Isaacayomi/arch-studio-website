import CustomButton from "../components/CustomButton";
import Project from "../components/Projects";
import ARROW_ICON from "../assets/icons/icon-arrow.svg";
import PROJECT_SOL from "../assets/images/project-sol.svg";
import PROJECT_TOWER from "../assets/images/project-tower.svg";
import PROJECT_PROTOTYPE from "../assets/images/project-prototype.svg";

import PROJECT_SOL_DESKTOP from "../assets/images/project-sol-desktop.png";
import PROJECT_TOWER_DESKTOP from "../assets/images/project-tower-desktop.png";
import PROJECT_PROTOTYPE_DESKTOP from "../assets/images/project-prototype-desktop.png";

const FeaturedProjectsSection = () => {
  return (
    <section>
      <div className="md:flex items-center md:justify-center md:gap-[8rem] md:mb-[5.31rem] lg:ml-[11rem]  ">
        <h3 className="text-very-dark-blue text-[3rem] non-italic font-bold leading-[3.25rem] tracking-[-0.10713rem] max-w-[19.4375rem] w-full pl-[2rem] mt-[4.56rem] md:mt-0 md:text-[4.5rem] md:tracking-[-0.125rem] md:pl-[5rem]">
          Featured
        </h3>
        <CustomButton
          to="/portfolio"
          className="hidden md:flex md:items-center md:justify-center md:mt-[1.5rem] md:py-[1.56rem] md:gap-[1.5rem] md:font-spartan md:max-w-[10.5625rem] md:w-full md:mx-auto md:bg-very-dark-blue md:text-white md:text-right md:text-[1.125rem] md:font-bold md:leading-[1.525rem] "
        >
          See All
          <span>
            <img src={ARROW_ICON} alt="Arrow icon" />
          </span>
        </CustomButton>
      </div>
      <div className="block lg:hidden">
        <Project src={PROJECT_SOL} title="Project Del Sol" num={1} />
        <Project src={PROJECT_TOWER} title="228B TOWER" num={2} />
        <Project src={PROJECT_PROTOTYPE} title="Le Prototype" num={3} />
      </div>

      <div className="hidden lg:flex lg:justify-center lg:items-center lg:gap-[1.87rem] lg:ml-[11rem] xl:ml-0">
        <Project src={PROJECT_SOL_DESKTOP} title="Project Del Sol" num={1} />
        <Project src={PROJECT_TOWER_DESKTOP} title="228B TOWER" num={2} />
        <Project src={PROJECT_PROTOTYPE_DESKTOP} title="Le Prototype" num={3} />
      </div>
      <CustomButton
        to="/portfolio"
        className="flex items-center justify-center mt-[1.5rem] py-[1.56rem] gap-[1.5rem] font-spartan max-w-[19.4375rem] w-full mx-auto bg-very-dark-blue text-white text-right text-[1.125rem] font-bold non-italic leading-[1.525rem] mb-[4.56rem] md:hidden"
      >
        See All
        <span>
          <img src={ARROW_ICON} alt="Arrow icon" />
        </span>
      </CustomButton>
    </section>
  );
};

export default FeaturedProjectsSection;
