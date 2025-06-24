import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import LeadersList from "../components/LeadersList";
import PageIntro from "../components/PageIntro";
import PageHeading from "../components/PageHeading";
import PageDetails from "../components/PageDetails";
import HeadingBlock from "../components/HeadingBlock";
import HeroImage from "../components/HeroImage";

import HERO_IMG from "../assets/images/image-hero-mobile.png";
import HERO_IMG_DESKTOP from "../assets/images/image-hero-desktop.png";
import IMAGE_HERITAGE from "../assets/images/image-heritage.jpg";

const About = () => {
  return (
    <div>
      <Navbar />
      <main className="relative lg:max-w-[1024px] lg:w-full lg:mx-auto ">
        <HeroImage mobileImage={HERO_IMG} desktopHeroImage={HERO_IMG_DESKTOP} />
        <section className="md:bg-white md:absolute md:top-[16.06rem] right-0 lg:h-[31.4375rem] xl:left-[31rem] xl:top-[29.9rem]">
          <Heading className="md:absolute md:top-[-12.5rem] lg:top-[-11.3rem] lg:left-[-9rem] ">
            About
          </Heading>
          <div className="md:absolute md:right-0 md:top-0 max-w-[21.4375rem] w-full mx-auto h-[2.8125rem]   bg-white md:hidden"></div>
          <PageIntro />
        </section>

        <section className="md:pt-[12.63rem] lg:pt-[8.81rem] lg:flex lg:items-start lg:justify-center lg:gap-[4rem] lg:pl-[7rem] lg:pr-[3rem] lg:mb-[13.06rem]">
          <div className="lg:w-[27.8125rem]">
            <PageHeading prefix="Our" keyword=" Heritage" />
            <PageDetails>
              Founded in 2007, we started as a trio of architects. Our
              complimentary skills and relentless attention to detail turned
              Arch into one of the most sought after boutique firms in the
              country.
              <br />
              <br />
              Specializing in Urban Design allowed us to focus on creating
              exceptional structures that live in harmony with their
              surroundings. We consider every detail from every surrounding
              element to inform our designs.
              <br />
              <br />
              Our small team of world-class professionals provides input on
              every project.
            </PageDetails>
          </div>
          <div className="hidden lg:block lg:max-w-[35.5rem] lg:pt-[1rem]">
            <img
              src={IMAGE_HERITAGE}
              alt="Heritage image"
              className="w-full object-cover"
            />
          </div>
        </section>

        <section className="lg:flex lg:justify-between lg:mx-auto lg:ml-[7rem]">
          <HeadingBlock prefix="The" keyword=" Leaders" />
          <LeadersList />
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default About;
