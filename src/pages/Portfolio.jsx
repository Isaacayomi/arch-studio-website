import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Project from "../components/Projects";

import SERAPH_STATION from "../assets/images/image-seraph.jpg";
import EEBOX from "../assets/images/image-eebox.jpg";
import FEDERAL from "../assets/images/image-federal.jpg";
import PROJECT_SOL_DESKTOP from "../assets/images/project-sol-desktop.png";
import PROJECT_PROTOTYPE_DESKTOP from "../assets/images/project-prototype-desktop.png";
import PROJECT_TOWER_DESKTOP from "../assets/images/project-tower-desktop.png";
import EDELWEISS from "../assets/images/image-edelweiss.jpg";
import NETCRY from "../assets/images/image-netcry.jpg";
import HYPERS from "../assets/images/image-hypers.jpg";
import SXIV from "../assets/images/image-sxiv.jpg";
import TRINITY_BANK from "../assets/images/image-trinity.jpg";
import PROJECT_PARMOUR_DESKTOP from "../assets/images/image-paramour.svg";
const Portfolio = () => {
  return (
    <div className="">
      <Navbar />
      <main className="flex flex-wrap justify-center  gap-x-[2rem] px-4 lg:px-8 md:ml-[4rem]">
        <div className="w-full md:w-[43rem] lg:w-[22rem] lg:mb-10">
          <Project
            src={SERAPH_STATION}
            description="September 2019"
            title="Seraph Station"
          />
        </div>

        <div className="w-full md:w-[43rem] lg:w-[22rem] lg:mb-10">
          <Project
            src={EEBOX}
            description="August 2017"
            title="Eebox Building"
          />
        </div>

        <div className="w-full md:w-[43rem] lg:w-[22rem] lg:mb-10">
          <Project
            src={FEDERAL}
            description="March 2017"
            title="Federal II Tower"
            className="bottom-8"
          />
        </div>

        <div className="w-full md:w-[43rem] lg:w-[22rem] lg:mb-10">
          <Project
            src={PROJECT_SOL_DESKTOP}
            description="January 2016"
            title="Project Del Sol"
            className="bottom-8"
          />
        </div>

        <div className="w-full md:w-[43rem] lg:w-[22rem] lg:mb-10">
          <Project
            src={PROJECT_PROTOTYPE_DESKTOP}
            description="October 2015"
            title="Project Prototype"
            className="bottom-8"
          />
        </div>

        <div className="w-full md:w-[43rem] lg:w-[22rem] lg:mb-10">
          <Project
            src={PROJECT_TOWER_DESKTOP}
            description="April 2015"
            title="228B TOWER"
            className="bottom-8"
          />
        </div>

        <div className="w-full md:w-[43rem] lg:w-[22rem] lg:mb-10">
          <Project
            src={EDELWEISS}
            description="December 2014"
            title="Grand Edelweiss"
            className="bottom-8"
          />
        </div>

        <div className="w-full md:w-[43rem] lg:w-[22rem] lg:mb-10">
          <Project
            src={NETCRY}
            description="August 2012"
            title="NetCry Tower"
            className="bottom-8"
          />
        </div>

        <div className="w-full md:w-[43rem] lg:w-[22rem] lg:mb-10">
          <Project
            src={HYPERS}
            description="January 2012"
            title="Hypers"
            className="bottom-8"
          />
        </div>

        <div className="w-full md:w-[43rem] lg:w-[22rem] lg:mb-10">
          <Project
            src={SXIV}
            description="March 2011"
            title="SXIV Tower"
            className="bottom-8"
          />
        </div>

        <div className="w-full md:w-[43rem] lg:w-[22rem] lg:mb-10">
          <Project
            src={TRINITY_BANK}
            description="September 2010"
            title="Trinity Bank Tower"
            className="bottom-8"
          />
        </div>

        <div className="w-full md:w-[43rem] lg:w-[22rem] lg:mb-10">
          <Project
            src={PROJECT_PARMOUR_DESKTOP}
            description="February 2008"
            title="Project Paramour"
            className="bottom-8"
          />
        </div>
      </main>

      <section className="w-full mx-auto ">
        <Footer />
      </section>
    </div>
  );
};
export default Portfolio;
