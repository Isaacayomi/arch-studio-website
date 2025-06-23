const Heading = ({ children }) => {
  return (
    <h2 className="hidden md:block md:text-heading-color md:font-spartan md:text-[7.5rem] md:font-bold md:leading-[12.5rem] md:tracking-[-0.1875rem] md:max-w-[36.3125rem] md:w-full md:mx-auto md:text-center md:mt-[5.56rem] lg:absolute lg:z-40 lg:text-[14rem] lg:font-bold lg:leading-[12.5rem] lg:tracking-[-0.6125rem] lg:top-0 lg:ml-[4rem] ">
      {children}
    </h2>
  );
};
export default Heading;
