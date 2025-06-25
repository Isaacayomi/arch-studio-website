import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ICON_CLOSE from "../assets/icons/icon-close.svg";
import ICON_HAMBURGER from "../assets/icons/icon-hamburger.svg";
import HOME_ICON from "../assets/icons/home-icon.svg";
import PORTFOLIO_ICON from "../assets/icons/portfolio-icon.png";
import ABOUT_ICON from "../assets/icons/about-icon.png";
import CONTACT_ICON from "../assets/icons/contact-icon.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  const pageMap = {
    "/": HOME_ICON,
    "/portfolio": PORTFOLIO_ICON,
    "/about": ABOUT_ICON,
    "/contact": CONTACT_ICON,
  };
  const pageIndex = pageMap[location.pathname];

  useEffect(() => {
    if (toggle) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [toggle]);

  return (
    <>
      <div className="relative z-40 md:flex md:items-center md:flex-start md:pl-[6rem] md: lg:justify-start lg:pl-[5.37rem] xl:pl-[47rem]">
        <img
          src={pageIndex}
          alt={pageIndex}
          className="hidden md:block absolute left-0 top-0 pl-[3.94rem]"
        />

        <nav className="flex items-center justify-between p-[2rem] md:self-start ">
          <Link to="/" className="outline-none">
            <img src="./logo.svg" alt="Logo" className="cursor-pointer" />
          </Link>

          <button className="md:hidden" onClick={() => setToggle(!toggle)}>
            <img
              src={toggle ? ICON_CLOSE : ICON_HAMBURGER}
              alt="menu toggle"
              className="cursor-pointer"
            />
          </button>
        </nav>

        <div
          className={`${toggle ? "flex" : "hidden"} md:flex md:items-center `}
        >
          <ul className="absolute top-full left-0 w-full px-[2rem] md:relative md:px-0">
            <div className="flex flex-col items-start pl-[3rem] py-[2.44rem] font-spartan text-[2rem] font-bold leading-[2.5rem] bg-very-light-grey  md:flex-row md:text-[1.125rem] md:text-link-color md:gap-[3.81rem] md:bg-transparent md:pt-[2rem]">
              <li className="pb-[1.06rem] md:cursor-pointer">
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
              <li className="pb-[1.06rem] md:cursor-pointer">
                <Link to="/contact" className="md:hover:text-very-dark-blue">
                  Contact
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
