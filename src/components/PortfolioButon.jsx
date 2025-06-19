import { Link } from "react-router-dom";
import ARROW_ICON from "../assets/icons/icon-arrow.svg";

const PortfolioButton = () => {
  return (
    <Link
      to="/portfolio"
      className="flex items-center justify-center mt-[5.19rem] py-[1.56rem] gap-[1.5rem] font-spartan max-w-[15.75rem] w-full bg-very-dark-blue text-white text-right text-[1.125rem] font-bold non-italic leading-[1.525rem]"
    >
      See Our Portfolio{" "}
      <span>
        <img src={ARROW_ICON} alt="Arrow icon" />
      </span>
    </Link>
  );
};
export default PortfolioButton;
