const Heading = ({ children }) => {
  return (
    <h2 className="hidden md:block text-heading-color font-spartan text-[6rem] font-bold leading-[12.5rem] tracking-[-0.1875rem] text-center">
      {children}
    </h2>
  );
};
export default Heading;
