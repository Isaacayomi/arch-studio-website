import { CustomCarousel } from "../components/CustomCarousel";

import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import IntroductionSection from "../components/IntroductionSection";
import AboutTeaser from "../components/AboutTeaser";
import FeaturedProjectsSection from "../components/FeaturedProjectsSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <section className="md:ml-[8.3rem] md:max-w-[35.8125rem] md:w-full ">
        <CustomCarousel />
      </section>
      <section className="lg:relative lg:w-full lg:px-4">
        <Heading>Welcome</Heading>
        <IntroductionSection />
      </section>
      <AboutTeaser />
      <FeaturedProjectsSection />
      <Footer />
    </>
  );
};
export default HomePage;
