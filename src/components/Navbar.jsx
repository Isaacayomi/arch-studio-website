import { useState } from "react";
import { Link } from "react-router-dom";
import ICON_CLOSE from "../assets/icons/icon-close.svg";
import ICON_HAMBURGER from "../assets/icons/icon-hamburger.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="md:flex md:gap-[4.93rem] md:items-center md:justify-center lg:justify-start lg:pl-[10.25rem]">
      <nav className="flex items-center justify-between p-[2rem] md:self-start">
        <Link to="/" className="outline-none">
          <img src="./logo.svg" alt="Logo" className="cursor-pointer" />
        </Link>

        <button className="md:hidden" onClick={() => setToggle(!toggle)}>
          <img
            src={toggle ? ICON_CLOSE : ICON_HAMBURGER}
            alt="close HAMBURGER"
            className="cursor-pointer"
          />
        </button>
      </nav>

      <div className={`${toggle ? "flex" : "hidden"} md:flex md:items-center`}>
        <ul className="z-10 pt-[2.44rem] pb-[2.62rem] pl-[3rem] ml-[2rem] w-[21.4375rem] flex flex-col justify-center items-start font-spartan text-[2rem] font-bold leading-[2.5rem] bg-very-light-grey md:bg-white md:flex-row md:text-[1.125rem] md:text-link-color md:gap-[3.81rem]">
          <li className="pb-[1.06rem] md:cursor-pointer ">
            <Link to="/portfolio" className="md:hover:text-very-dark-blue">
              Portfolio
            </Link>
          </li>
          <li className="pb-[1.06rem] md:cursor-pointer">
            <Link
              to="/about"
              className="whitespace-nowrap md:hover:text-very-dark-blue"
            >
              About Us
            </Link>
          </li>
          <li className="pb-[1.06rem] md:cursor-pointer ">
            <Link to="/contact" className="md:hover:text-very-dark-blue">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
