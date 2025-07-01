import { CustomCarousel } from "../components/CustomCarousel";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import IntroductionSection from "../components/IntroductionSection";
import AboutTeaser from "../components/AboutTeaser";
import FeaturedProjectsSection from "../components/FeaturedProjectsSection";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  useGSAP(() => {
    const sections = gsap.utils.toArray(".scroll-section");
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { y: 300, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 100%",
            end: "top 50%",
            scrub: false,
            delay: 1.5,
          },
        }
      );
    });
  });
  return (
    <>
      <Navbar />
      <main className="max-w-[69.375rem] mx-auto px-[1rem] md:pl-[2.19rem] lg:mx-[4.87rem] xl:max-w-[1440px] xl:mx-auto overflow-hidden">
        <section className="scroll-section w-full">
          <CustomCarousel />
        </section>

        <section className="scroll-section lg:relative w-full mx-auto">
          <Heading>Welcome</Heading>
          <IntroductionSection />
        </section>

        <section className="scroll-section w-full mx-auto">
          <AboutTeaser />
          <FeaturedProjectsSection />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
