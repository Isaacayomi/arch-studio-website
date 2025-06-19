const Heading = ({ children }) => {
  return (
    <h2 className="hidden md:block md:text-heading-color md:font-spartan md:text-[7.5rem] md:font-bold md:leading-[12.5rem] md:tracking-[-0.1875rem] md:max-w-[36.3125rem] md:w-full md:mx-auto md:text-center md:mt-[5.56rem] ">
      {children}
    </h2>
  );
};
export default Heading;
