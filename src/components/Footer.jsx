import { Link } from "react-router-dom";
import ICON from "../assets/icons/icon.svg";
import CustomButton from "./CustomButton";
import ARROW_ICON from "../assets/icons/icon-arrow.svg";

const Footer = () => {
  return (
    <footer className="relative w-full h-[23.9375rem] mt-[8.25rem] bg-heading-color md:h-[7.5rem] lg:max-w-[69.375rem] lg:mx-auto ">
      <Link to="/">
        <img
          src={ICON}
          alt="Logo"
          className="max-w-[7.5rem] w-full h-[7.5rem] bg-very-dark-blue mx-auto absolute top-0 left-1/2 -translate-x-1/2 mt-[-2.5rem] md:left-10 md:bottom-0 md:mt-0"
        />
      </Link>

      <ul className="font-spartan flex flex-col items-center gap-[3.81rem] pt-[6.2rem] text-link-color text-[1.125rem] font-bold leading-[1.5625rem] px-4 md:flex-row md:pt-[3.06rem] md:w-full md:px-10 md:pl-[10.25rem]">
        <li className="md:hover:text-very-dark-blue">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="md:hover:text-very-dark-blue">
          <Link to="/about">About Us</Link>
        </li>
        <li className="md:hover:text-very-dark-blue">
          <Link to="contact">Contact</Link>
        </li>

        <CustomButton
          to="/about"
          className="flex items-center absolute bottom-0 justify-center py-[1.56rem] gap-[1.5rem] font-spartan max-w-[15.75rem] w-full bg-very-dark-blue text-white text-right text-[1.125rem] font-bold non-italic leading-[1.525rem] md:absolute md:top-0 md:right-0"
        >
          See Our Portfolio
          <span>
            <img src={ARROW_ICON} alt="Arrow icon" />
          </span>
        </CustomButton>
      </ul>
    </footer>
  );
};

export default Footer;
