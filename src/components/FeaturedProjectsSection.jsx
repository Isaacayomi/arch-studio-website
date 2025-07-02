import CustomButton from "../components/CustomButton";
import Project from "../components/Projects";
import ARROW_ICON from "../assets/icons/icon-arrow.svg";
import PROJECT_SOL from "../assets/images/project-sol.svg";
import PROJECT_TOWER from "../assets/images/project-tower.svg";
import PROJECT_PROTOTYPE from "../assets/images/project-prototype.svg";
import PROJECT_SOL_DESKTOP from "../assets/images/project-sol-desktop.png";
import PROJECT_TOWER_DESKTOP from "../assets/images/project-tower-desktop.png";
import PROJECT_PROTOTYPE_DESKTOP from "../assets/images/project-prototype-desktop.png";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const FeaturedProjectsSection = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".featured-heading",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".featured-heading",
          start: "top 90%",
        },
      }
    );

    gsap.fromTo(
      ".see-all-btn",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".see-all-btn",
          start: "top 95%",
        },
      }
    );
  }, []);

  return (
    <section>
      <div className="w-full max-w-[69.375rem] mx-auto">
        <div className="md:flex md:items-center md:justify-between md:mb-[5.31rem] md:px-[5rem] lg:px-0">
          <h3 className="featured-heading text-very-dark-blue text-[3rem] non-italic font-bold leading-[3.25rem] tracking-[-0.10713rem] max-w-[19.4375rem] pl-[2rem] mt-[4.56rem] md:mt-0 md:text-[4.5rem] md:tracking-[-0.125rem] md:pl-0 md:max-w-[19.4375rem]">
            Featured
          </h3>
          <CustomButton
            to="/portfolio"
            className="see-all-btn hidden md:flex md:items-center md:justify-center md:mt-[1.5rem] md:py-[1.56rem] md:gap-[1.5rem] md:font-spartan md:max-w-[10.5625rem] md:w-auto md:bg-very-dark-blue md:text-white md:text-right md:text-[1.125rem] md:font-bold md:leading-[1.525rem] px-8"
          >
            See All
            <span>
              <img src={ARROW_ICON} alt="Arrow icon" />
            </span>
          </CustomButton>
        </div>

        {/* Mobile view */}
        <div className="block lg:hidden">
          <Project
            src={PROJECT_SOL}
            title="Project Del Sol"
            num={1}
            description="View all project"
            to="/portfolio"
          />
          <Project
            src={PROJECT_TOWER}
            title="228B TOWER"
            num={2}
            description="View all project"
            to="/portfolio"
          />
          <Project
            src={PROJECT_PROTOTYPE}
            title="Le Prototype"
            num={3}
            description="View all project"
            to="/portfolio"
          />
        </div>

        {/* Desktop view */}
        <div className="hidden lg:flex lg:justify-center lg:items-center lg:gap-[1.87rem]">
          <Project
            src={PROJECT_SOL_DESKTOP}
            title="Project Del Sol"
            num={1}
            description="View all project"
            to="/portfolio"
          />
          <Project
            src={PROJECT_TOWER_DESKTOP}
            title="228B TOWER"
            num={2}
            description="View all project"
            to="/portfolio"
          />
          <Project
            src={PROJECT_PROTOTYPE_DESKTOP}
            title="Le Prototype"
            num={3}
            description="View all project"
            to="/portfolio"
          />
        </div>

        <CustomButton
          to="/portfolio"
          className="see-all-btn flex items-center justify-center mt-[1.5rem] py-[1.56rem] gap-[1.5rem] font-spartan max-w-[19.4375rem] w-full mx-auto bg-very-dark-blue text-white text-right text-[1.125rem] font-bold non-italic leading-[1.525rem] mb-[4.56rem] md:hidden"
        >
          See All
          <span>
            <img src={ARROW_ICON} alt="Arrow icon" />
          </span>
        </CustomButton>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
