import TEAM_BG from "../assets/icons/small-team.svg";
import ARROW_ICON from "../assets/icons/icon-arrow.svg";
import CustomButton from "./CustomButton";

const AboutTeaser = () => {
  return (
    <section className="relative">
      <img src={TEAM_BG} alt="team-background" className="w-full" />
      <p className="absolute top-0 mt-[11.31rem] max-w-[19.4375rem] w-full text-[3rem] font-bold leading-[3.25rem] tracking-[-0.10713rem] text-white pl-[2rem] mb-[1.44rem]">
        Small teams, big ideas
      </p>

      <CustomButton
        to="/about"
        className="flex items-center justify-center  py-[1.56rem] gap-[1.5rem] font-spartan max-w-[15.75rem] w-full bg-very-dark-blue text-white text-right text-[1.125rem] font-bold non-italic leading-[1.525rem] absolute top-0 mt-[19.25rem] ml-[2rem] mb-[4.56rem]"
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
