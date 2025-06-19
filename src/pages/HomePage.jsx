import Navbar from "../components/Navbar";
import { CustomCarousel } from "../components/CustomCarousel";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <section className="md:ml-[8.3rem] md:max-w-[35.8125rem] md:w-full ">
        <CustomCarousel />
      </section>
    </>
  );
};
export default HomePage;
