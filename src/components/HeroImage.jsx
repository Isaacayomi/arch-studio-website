import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroImage = ({ mobileImage, desktopHeroImage }) => {
  const containerRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div ref={containerRef}>
      <img src={mobileImage} alt="Hero image" className="mx-auto md:hidden" />
      <img
        src={desktopHeroImage}
        alt="Hero image"
        className="hidden max-w-[39.6875rem] w-full md:block mx-auto pl-[2rem] lg:ml-[10.45rem] xl:max-w-[50.625rem] xl:ml-0"
      />
    </div>
  );
};

export default HeroImage;
