import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Leaders = ({ src, name, title }) => {
  const cardRef = useRef();

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".leader-img",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".leader-img",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".leader-name",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: ".leader-name",
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".leader-title",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.5,
          scrollTrigger: {
            trigger: ".leader-title",
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={cardRef} className="max-w-[19.4375rem] mx-auto">
      <img src={src} alt="Leader" className="w-full leader-img" />
      <h3 className="leader-name text-very-dark-blue text-[2rem] font-bold leading-[2.5rem] font-spartan pt-1">
        {name}
      </h3>
      <p className="leader-title text-dark-grey font-spartan text-[1.125rem] font-medium leading-[1.5rem] mb-[4.94rem] lg:mb-4">
        {title}
      </p>
    </div>
  );
};

export default Leaders;
