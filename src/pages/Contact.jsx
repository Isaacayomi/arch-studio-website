import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import Heading from "../components/Heading";
import PageIntro from "../components/PageIntro";
import Footer from "../components/Footer";
import PageHeading from "../components/PageHeading";
import Address from "../components/Address";
import CONTACT_HERO_IMG from "../assets/images/contact-hero-image-mobile.png";
import CONTACT_HERO_IMG_DESKTOP from "../assets/images/contact-hero-image-desktop.png";
import MOBILE_MAP from "../assets/images/mobile-map.png";
import DESKTOP_MAP from "../assets/images/desktop-map.png";

const Contact = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <main className="relative lg:max-w-[1024px] lg:w-full lg:mx-auto ">
        <HeroImage
          mobileImage={CONTACT_HERO_IMG}
          desktopHeroImage={CONTACT_HERO_IMG_DESKTOP}
        />
        <section className="md:bg-white md:absolute md:top-[16.06rem] right-0 lg:h-[31.4375rem] xl:left-[31rem] xl:top-[29.9rem]">
          <Heading className="md:absolute md:top-[-12.5rem] lg:top-[-11.3rem] lg:left-[-9rem] ">
            Contact
          </Heading>
          <div className="md:absolute md:right-0 md:top-0 max-w-[21.4375rem] w-full mx-auto h-[2.8125rem]   bg-white md:hidden"></div>
          <PageIntro
            heading="Tell us about your project"
            content="We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!"
          />
        </section>

        <section className="md:pt-[12.63rem] lg:pt-[8.81rem] lg:flex lg:items-start lg:justify-center lg:gap-[4rem] lg:pl-[7rem] lg:pr-[3rem] lg:mb-[10.09rem]">
          <div className="lg:w-[27.8125rem]">
            <PageHeading prefix="Contact" keyword=" Details" />
          </div>

          <div className="lg:w-[27.8125rem]">
            <Address
              heading="Main Office"
              mail="archone@mail.com"
              address="1892 Chenoweth Drive TN"
              phone="123 - 456 - 4451"
            />
          </div>

          <div className="lg:w-[27.8125rem] ">
            <Address
              heading="Office II"
              mail="archtwo@mail.com"
              address="3399 Wines Lane TX"
              phone="832 - 123 - 4421"
            />
          </div>
        </section>

        <section className="w-full max-w-[69rem] mx-auto px-[1.5rem]">
          <img
            src={DESKTOP_MAP}
            alt="Map"
            className="hidden lg:block w-full object-cover"
          />

          <img
            src={MOBILE_MAP}
            alt="Map"
            className="block lg:hidden w-full object-cover"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
