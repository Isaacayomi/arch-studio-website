import Leaders from "../components/Leaders";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";

import HERO_IMG from "../assets/images/image-hero-mobile.png";
import HERO_IMG_DESKTOP from "../assets/images/image-hero-desktop.png";

import IMAGE_JAKE from "../assets/images/avatar-jake.jpg";
import IMAGE_THOMPSON from "../assets/images/avatar-thompson.jpg";
import IMAGE_JACKSON from "../assets/images/avatar-jackson.jpg";
import IMAGE_MARIA from "../assets/images/avatar-maria.jpg";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <main className="relative">
        <img src={HERO_IMG} alt="Hero image" className="mx-auto md:hidden" />
        <img
          src={HERO_IMG_DESKTOP}
          className="hidden md:block mx-auto pl-[2rem]"
        />
        <section className="md:bg-white md:absolute md:top-[16.06rem] right-0">
          <Heading className="md:absolute md:top-[-13rem] ">About</Heading>
          <div className="md:absolute md:right-0 md:top-0 max-w-[21.4375rem] w-full mx-auto h-[2.8125rem]   bg-white md:hidden"></div>
          <h3 className="text-very-dark-blue text-[3rem] non-italic font-bold leading-[3.25rem] tracking-[-0.10713rem] max-w-[19.4375rem] w-full mx-auto mt-[1.25rem] mb-[1.38rem] md:max-w-[27.875rem] md:w-full md:text-[4.5rem] md:leading-[4rem] md:tracking-[-0.125rem] md:pt-[10.2rem] md:pb-[2.38rem] md:mx-auto lg:pt-[2.7rem]  ">
            Your team of professionals
          </h3>
          <p className="font-spartan max-w-[19.375rem] w-full mx-auto text-dark-grey mb-[9.06rem] md:max-w-[30.75rem] md:px-[1.5rem] md:w-full md:text-[1.125rem] md:font-medium md:leading-[1.5rem] md:pb-0 md:mb-0 lg:ml-[5rem]">
            Our small team of world-class professionals will work with you every
            step of the way. Strong relationships are at the core of everything
            we do. This extends to the relationship our projects have with their
            surroundings.
          </p>
        </section>

        <section className="md:pt-[12.63rem]">
          <h3
            className="
    text-very-dark-blue text-[3rem] non-italic font-bold leading-[3.25rem] tracking-[-0.10713rem] max-w-[19.4375rem] w-full mx-auto mt-[1.25rem] mb-[1.38rem] text-left md:max-w-[35.75rem] md:w-full md:mx-auto md:text-left md:text-[4.5rem] md:leading-[4rem] md:tracking-[-0.125rem] md:font-spartan md:font-bold md:text-very-dark-blue md:mt-[-4.5rem] md:pb-[2.69rem] md:pl-0 lg:pt-[2.7rem] lg:pb-[2.69rem]
  "
          >
            <span className="md:block">Our </span>
            <span className="md:block">Heritage</span>
          </h3>

          <p className="font-spartan max-w-[19.375rem] w-full mx-auto text-dark-grey mb-[7rem] md:max-w-[35.75rem] md:w-full md:mx-auto md:text-left md:text-[1.125rem] md:font-medium md:leading-[1.5rem] md:pb-[14.56rem] lg:ml-[5rem]">
            Founded in 2007, we started as a trio of architects. Our
            complimentary skills and relentless attention to detail turned Arch
            into one of the most sought after boutique firms in the country.
            <br />
            <br />
            Speciliazing in Urban Design allowed us to focus on creating
            exceptional structures that live in harmony with their surroundings.
            We consider every detail from every surrounding element to inform
            our designs. <br />
            <br />
            Our small team of world-class professionals provides input on every
            project.
          </p>
        </section>

        <section>
          <h3
            className="
    text-very-dark-blue text-[3rem] non-italic font-bold leading-[3.25rem] tracking-[-0.10713rem] max-w-[19.4375rem] w-full mx-auto mt-[1.25rem] mb-[1.38rem] text-left md:max-w-[35.75rem] md:w-full md:mx-auto md:text-left md:text-[4.5rem] md:leading-[4rem] md:tracking-[-0.125rem] md:font-spartan md:font-bold md:text-very-dark-blue md:mt-[-4.5rem] md:pb-[2.69rem] md:pl-0 lg:pt-[2.7rem] lg:pb-[2.69rem]
  "
          >
            <span className="md:block">The </span>
            <span className="md:block">Leaders</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2  mx-auto md:px-0">
            <Leaders
              src={IMAGE_JAKE}
              name="Jake Richards"
              title="Chief Architect"
            />

            <Leaders
              src={IMAGE_THOMPSON}
              name="Thompson Smith"
              title="Head of Finance"
            />

            <Leaders
              src={IMAGE_JACKSON}
              name="Jackson Rourke"
              title="Lead Designer"
            />

            <Leaders
              src={IMAGE_MARIA}
              name="Maria Simpson"
              title="Senior Architect"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default About;
