import TEAM_BG from "../assets/icons/small-team.svg";
import ARROW_ICON from "../assets/icons/icon-arrow.svg";
import CustomButton from "./CustomButton";

const AboutTeaser = () => {
  return (
    <section className="relative md:max-w-[35.8125rem] md:w-full md:mx-auto md:h-[35.8125rem] h-[35rem] mb-[4rem] md:mb-[12.94rem] md:mt-[-5rem]">
      <img
        src={TEAM_BG}
        alt="team-background"
        className="w-full h-[35.8125rem] object-cover"
      />
      <p className="absolute left-0 bottom-[6.5rem] w-[19.4375rem] text-[3rem] font-bold leading-[3.25rem] tracking-[-0.10713rem] text-white pl-[2rem] mb-[1.44rem] md:top-0 md:mt-[10.44rem] md:text-[4.5rem] md:leading-[4rem] md:tracking-[-0.125rem] md:max-w-[27.8125rem] md:w-full ">
        Small teams, big ideas
      </p>
      <CustomButton
        to="/about"
        className="flex items-center justify-center py-[1.56rem] gap-[1.5rem] font-spartan max-w-[15.75rem] w-full bg-very-dark-blue text-white text-right text-[1.125rem] font-bold non-italic leading-[1.525rem] absolute left-0 bottom-[2rem] ml-[2rem] md:bottom-[10rem]"
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
