import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CustomButton = ({ children, className, to }) => {
  useGSAP(() => {
    gsap.fromTo(
      "#custom-button",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        delay: 1.5,
        duration: 0.5,
        ease: "bounce.inOut",
        scrub: true,
      }
    );
  }, []);

  return (
    <Link
      to={to}
      id="custom-button"
      className={`${className} hover:bg-dark-grey active:bg-light-grey`}
    >
      {children}
    </Link>
  );
};
export default CustomButton;
