import { CustomCarousel } from "../components/CustomCarousel";

import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import IntroductionSection from "../components/IntroductionSection";
import AboutTeaser from "../components/AboutTeaser";
import FeaturedProjectsSection from "../components/FeaturedProjectsSection";
import Footer from "../components/Footer";

// const HomePage = () => {
//   return (
//     <>
//       <Navbar />
//       <section className="md:max-w-[35.8125rem] md:w-full ">
//         <CustomCarousel />
//       </section>
//       <section className="lg:relative lg:w-full lg:px-4">
//         <Heading>Welcome</Heading>
//         <IntroductionSection />
//       </section>
//       <AboutTeaser />
//       <FeaturedProjectsSection />
//       <Footer />
//     </>
//   );
// };

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-[1440px] mx-auto px-[1rem] md:px-[2rem] lg:px-[3rem]">
        <section className="w-full">
          <CustomCarousel />
        </section>

        <section className="lg:relative w-full">
          <Heading>Welcome</Heading>
          <IntroductionSection />
        </section>

        <AboutTeaser />
        <FeaturedProjectsSection />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
