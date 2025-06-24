import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Project from "../components/Projects";
import ProjectList from "../components/ProjectLists";

const Portfolio = () => {
  return (
    <div className="">
      <Navbar />
      <main className="flex flex-wrap justify-center  gap-x-[2rem] px-4 lg:px-8 md:ml-[4rem]">
        <ProjectList />
      </main>

      <section className="w-full mx-auto ">
        <Footer />
      </section>
    </div>
  );
};
export default Portfolio;
