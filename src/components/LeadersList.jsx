import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import IMAGE_JAKE from "../assets/images/avatar-jake.jpg";
import IMAGE_THOMPSON from "../assets/images/avatar-thompson.jpg";
import IMAGE_JACKSON from "../assets/images/avatar-jackson.jpg";
import IMAGE_MARIA from "../assets/images/avatar-maria.jpg";
import Leaders from "../components/Leaders";

const LeadersList = () => {
  const containerRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      ".leader-item",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 mx-auto md:px-[3rem] lg:gap-[2.5rem]"
    >
      <div className="leader-item">
        <Leaders
          src={IMAGE_JAKE}
          name="Jake Richards"
          title="Chief Architect"
        />
      </div>
      <div className="leader-item">
        <Leaders
          src={IMAGE_THOMPSON}
          name="Thompson Smith"
          title="Head of Finance"
        />
      </div>
      <div className="leader-item">
        <Leaders
          src={IMAGE_JACKSON}
          name="Jackson Rourke"
          title="Lead Designer"
        />
      </div>
      <div className="leader-item">
        <Leaders
          src={IMAGE_MARIA}
          name="Maria Simpson"
          title="Senior Architect"
        />
      </div>
    </div>
  );
};

export default LeadersList;
