import TEAM_BG from "../assets/images/small-team.svg";
import TEAM_BG_DESKTOP from "../assets/images/small-team.png";
import ARROW_ICON from "../assets/icons/icon-arrow.svg";
import CustomButton from "./CustomButton";

const AboutTeaser = () => {
  return (
    <section className="relative md:max-w-[35.8125rem] md:w-full md:mx-auto md:h-[35.8125rem] h-[35rem] mb-[4rem] md:mb-[12.94rem] md:mt-[-5rem] lg:max-w-[69.375rem] lg:h-[35rem]">
      {/* <img
        src={TEAM_BG}
        alt="team-background"
        className="w-full h-[35.8125rem] lg:h-[35rem] object-cover "
      /> */}

      {/* Mobile & Tablet Image */}
      <img
        src={TEAM_BG}
        alt="team-background"
        className="w-full object-cover h-[35.8125rem] lg:hidden"
      />

      {/* Desktop Image */}
      <img
        src={TEAM_BG_DESKTOP}
        alt="team-background-desktop"
        className="hidden lg:block max-w-[69.375rem] mx-auto object-cover xl:ml-0"
      />

      <p className="absolute left-0 bottom-[6.5rem] w-[19.4375rem] text-[3rem] font-bold leading-[3.25rem] tracking-[-0.10713rem] text-white pl-[2rem] mb-[1.44rem] md:top-0 md:mt-[10.44rem] md:text-[4.5rem] md:leading-[4rem] md:tracking-[-0.125rem] md:max-w-[27.8125rem] md:w-full lg:left-[10rem]">
        Small teams, big ideas
      </p>
      <CustomButton
        to="/about"
        className="flex items-center justify-center py-[1.56rem] gap-[1.5rem] font-spartan max-w-[15.75rem] w-full bg-very-dark-blue text-white text-right text-[1.125rem] font-bold non-italic leading-[1.525rem] absolute left-0 bottom-[2rem] ml-[2rem] md:bottom-[10rem] lg:left-[10rem]"
      >
        About Us
        <span>
          <img src={ARROW_ICON} alt="Arrow icon" />
        </span>
      </CustomButton>
    </section>
  );
};
export default AboutTeaser;
