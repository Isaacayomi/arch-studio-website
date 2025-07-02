import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Project = ({ src, title, num, description, to, index }) => {
  const projectRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      projectRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: index * 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: projectRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [index]);

  return (
    <div
      ref={projectRef}
      className="max-w-[35.75rem] mx-auto mt-[2.69rem] relative px-[2rem] h-auto md:max-w-[42rem] md:h-[15rem] lg:h-[35rem] lg:max-w-[21.875rem] lg:m-0 lg:px-0"
    >
      <img
        className="relative w-full mx-auto md:mb-[1.5rem] md:h-full lg:h-full object-cover lg:p-0"
        src={src}
        alt="project"
      />
      <span className="hidden md:block absolute top-0 right-24 text-white font-spartan text-[15.625rem] font-bold leading-[12.5rem] tracking-[-0.3125rem] opacity-50 pt-[1.5rem] h-[12.5rem] lg:right-0">
        {num}
      </span>

      <div className="absolute bottom-[0.7rem] pl-[1.5rem] md:bottom-[2.3rem] md:pl-[2.5rem]">
        <p className="mt-[6rem] md:mt-[12.5rem] text-white font-spartan text-[2rem] font-bold leading-[2.5rem]">
          {title}
        </p>
        <Link
          to={to}
          className="text-[1.125rem] font-spartan font-medium leading-[1.5rem] text-white"
        >
          {description}
        </Link>
      </div>
    </div>
  );
};

export default Project;
