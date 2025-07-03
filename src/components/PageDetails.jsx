import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const PageDetails = ({ children }) => {
  const detailRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      detailRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: detailRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <p
      ref={detailRef}
      className="
        font-spartan text-dark-grey max-w-[19.375rem] mx-auto mb-[7rem]
        md:max-w-[35.75rem] md:text-[1.125rem] md:font-medium md:leading-[1.5rem]
        lg:mb-0 lg:max-w-none lg:mx-0 lg:text-left
      "
    >
      {children}
    </p>
  );
};

export default PageDetails;
