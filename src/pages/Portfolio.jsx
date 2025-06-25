import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Project from "../components/Projects";
import ProjectList from "../components/ProjectLists";

const Portfolio = () => {
  return (
    <div className="">
      <Navbar />
      <main className="px-4 md:ml-[4rem] lg:grid lg:grid-cols-3 lg:gap-x-[2rem] lg:gap-y-[2rem] lg:px-8 xl:max-w-[1200px] xl:mx-auto">
        <ProjectList />
      </main>

      <section className="w-full mx-auto ">
        <Footer />
      </section>
    </div>
  );
};
export default Portfolio;
