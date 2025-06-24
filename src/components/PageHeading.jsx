const PageHeading = ({ prefix, keyword }) => {
  return (
    <h3
      className="
      text-very-dark-blue text-[3rem] font-bold leading-[3.25rem] tracking-[-0.10713rem]
      max-w-[19.4375rem] mx-auto mt-[1.25rem] mb-[1.38rem] text-left
      md:max-w-[35.75rem] md:text-[4.5rem] md:leading-[4rem] md:tracking-[-0.125rem]
      md:font-spartan md:mt-[-4.5rem] md:pb-[2.69rem]
      lg:max-w-none lg:mx-0 lg:mt-0
    "
    >
      <span className="md:block">{prefix}</span>
      <span className="md:block">{keyword}</span>
    </h3>
  );
};

export default PageHeading;
