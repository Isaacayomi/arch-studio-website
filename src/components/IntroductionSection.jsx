import IMAGE_WELCOME from "../assets/images/image-welcome.jpg";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

const IntroductionSection = () => {
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);

  useGSAP(() => {
    // Ensure paragraph exists
    if (!paragraphRef.current) return;

    // Split text
    const split = new SplitText(paragraphRef.current, {
      type: "words, chars",
    });

    gsap.fromTo(
      split.chars,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.05,
        ease: "power2.out",

        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 100%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );

    // Animate image
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          ease: "power1.out",
          scrollTrigger: {
            trigger: imageRef.current,
            stagger: 0.1,
            start: "top 85%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section className="md:flex md:justify-center lg:flex lg:justify-center lg:items-center lg:gap-[7.81rem] lg:max-w-[69.375rem] lg:w-full lg:mx-auto">
      <div className="lg:mt-[16.81rem] xl:ml-0">
        <h3
          ref={headingRef}
          className="text-very-dark-blue text-[3rem] font-bold leading-[3.25rem] tracking-[-0.10713rem] max-w-[19.4375rem] w-full mx-auto mt-[8.81rem] mb-[1.38rem] md:max-w-[27.875rem] md:w-full md:text-[4.5rem] md:leading-[4rem] md:tracking-[-0.125rem] md:mt-[-4.5rem] md:pb-[2.69rem] md:ml-0 lg:pt-[2.7rem] lg:text-[4.5rem] lg:font-bold lg:leading-[4rem] lg:tracking-[-0.125rem] lg:pb-[2.69rem] lg:ml-[5rem]"
        >
          Welcome to Arch Studio
        </h3>

        <p
          ref={paragraphRef}
          className="font-spartan max-w-[19.375rem] w-full mx-auto text-dark-grey mb-[7.06rem] md:max-w-[35.75rem] md:w-full md:text-[1.125rem] md:font-medium md:leading-[1.5rem] md:pb-[14.56rem] lg:ml-[5rem]"
        >
          We have a unique network and skillset to help bring your projects to
          life. Our small team of highly skilled individuals combined with our
          large network put us in a strong position to deliver exceptional
          results.
          <br />
          <br />
          Over the past 10 years, we have worked on all kinds of projects. From
          stations to high-rise buildings, we create spaces that inspire and
          delight.
          <br />
          <br />
          We work closely with our clients so that we understand the intricacies
          of each project. This allows us to work in harmony the surrounding
          area to create truly stunning projects that will stand the test of
          time.
        </p>
      </div>

      <div className="hidden lg:block min-h-[20rem]">
        <img
          ref={imageRef}
          src={IMAGE_WELCOME}
          alt="Welcome"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default IntroductionSection;
