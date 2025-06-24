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
      <main className="max-w-[1440px] mx-auto px-[1rem] md:px-[2rem] lg:px-[3rem] overflow-hidden">
        <section className="w-full">
          <CustomCarousel />
        </section>

        <section className="lg:relative w-full mx-auto">
          <Heading>Welcome</Heading>
          <IntroductionSection />
        </section>

        <section className="w-full mx-auto">
          <AboutTeaser />
          <FeaturedProjectsSection />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
