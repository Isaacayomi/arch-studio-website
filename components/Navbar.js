import { Link } from "react-router-dom";
import { useState } from "react";
import ICON_CLOSE from "../assets/icons/icon-close.svg";
import ICON_HAMBURGER from "../assets/icons/icon-hamburger.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="border border-red">
      <nav className="flex items-center justify-between p-[2rem] md:p-[1rem] md:gap-[4.93rem] md:justify-center">
        <Link to="/">
          <img src="./logo.svg" alt="Logo" className="cursor-pointer" />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex md:items-center md:gap-[3.81rem] font-spartan text-[1.125rem] font-bold leading-[2.5rem] text-link-color">
          <li className="md:cursor-pointer">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="md:cursor-pointer">
            <Link to="/about" className="whitespace-nowrap">
              About Us
            </Link>
          </li>
          <li className="md:cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setToggle(!toggle)}>
          <img
            src={toggle ? ICON_CLOSE : ICON_HAMBURGER}
            alt="Menu"
            className="cursor-pointer"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`${toggle ? "flex" : "hidden"} md:hidden`}>
        <ul className="z-10 pt-[2.44rem] pb-[2.62rem] pl-[3rem] ml-[2rem] w-[21.4375rem] flex flex-col justify-center items-start font-spartan text-[2rem] font-bold leading-[2.5rem] bg-very-light-grey">
          <li className="pb-[1.06rem]">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="pb-[1.06rem]">
            <Link to="/about" className="whitespace-nowrap">
              About Us
            </Link>
          </li>
          <li className="pb-[1.06rem]">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
