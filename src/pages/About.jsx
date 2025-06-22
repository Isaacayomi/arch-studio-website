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
        <section className="md:bg-white md:absolute md:top-[18.06rem]  right-0">
          {" "}
          <div className="md:absolute md:right-0 md:top-0 max-w-[21.4375rem] w-full mx-auto h-[2.8125rem]  bg-white md:hidden"></div>
          <Heading className="md:mt-0 md:top-[-12rem]">About</Heading>
          <h3 className="text-very-dark-blue text-[3rem] non-italic font-bold leading-[3.25rem] tracking-[-0.10713rem] max-w-[19.4375rem] w-full mx-auto mt-[1.25rem] mb-[1.38rem] md:max-w-[27.875rem] md:w-full md:text-[4.5rem] md:leading-[4rem] md:tracking-[-0.125rem]  md:mt-[-4.5rem] md:pb-[2.69rem] md:mx-auto lg:pt-[2.7rem] lg:text-[4.5rem] lg:font-bold lg:leading-[4rem] lg:tracking-[-0.125rem] lg:pb-[2.69rem] ">
            Your team of professionals
          </h3>
          <p className="font-spartan max-w-[19.375rem] w-full mx-auto text-dark-grey mb-[9.06rem] md:max-w-[35.75rem] md:w-full md:text-[1.125rem] md:font-medium md:leading-[1.5rem] md:pb-[14.56rem] lg:ml-[5rem] md:pb-0">
            Our small team of world-class professionals will work with you every
            step of the way. Strong relationships are at the core of everything
            we do. This extends to the relationship our projects have with their
            surroundings.
          </p>
        </section>

        <section className="md:pt-[50rem]">
          <h3 className="text-very-dark-blue text-[3rem] non-italic font-bold leading-[3.25rem] tracking-[-0.10713rem] max-w-[19.4375rem] w-full mx-auto mt-[1.25rem] mb-[1.38rem] md:max-w-[27.875rem] md:w-full md:text-[4.5rem] md:leading-[4rem] md:tracking-[-0.125rem]  md:mt-[-4.5rem] md:pb-[2.69rem] md:mx-auto lg:pt-[2.7rem] lg:text-[4.5rem] lg:font-bold lg:leading-[4rem] lg:tracking-[-0.125rem] lg:pb-[2.69rem] ">
            Our Heritage
          </h3>

          <p className="font-spartan max-w-[19.375rem] w-full mx-auto text-dark-grey mb-[7rem] md:max-w-[35.75rem] md:w-full md:text-[1.125rem] md:font-medium md:leading-[1.5rem] md:pb-[14.56rem] lg:ml-[5rem]">
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
          <h3 className="text-very-dark-blue text-[3rem] non-italic font-bold leading-[3.25rem] tracking-[-0.10713rem] max-w-[19.4375rem] w-full mx-auto mt-[1.25rem] mb-[3.44rem] md:max-w-[27.875rem] md:w-full md:text-[4.5rem] md:leading-[4rem] md:tracking-[-0.125rem]  md:mt-[-4.5rem] md:pb-[2.69rem] md:mx-auto lg:pt-[2.7rem] lg:text-[4.5rem] lg:font-bold lg:leading-[4rem] lg:tracking-[-0.125rem] lg:pb-[2.69rem] ">
            The Leaders
          </h3>
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
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default About;
