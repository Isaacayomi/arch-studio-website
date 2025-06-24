const HeadingBlock = ({ prefix, keyword }) => {
  return (
    <div>
      <h3 className="text-very-dark-blue text-[3rem] non-italic font-bold leading-[3.25rem] tracking-[-0.10713rem] max-w-[19.4375rem] w-full mx-auto mt-[1.25rem] mb-[1.38rem] text-left md:max-w-[35.75rem] md:w-full md:mx-auto md:text-left md:text-[4.5rem] md:leading-[4rem] md:tracking-[-0.125rem] md:font-spartan md:font-bold md:text-very-dark-blue md:mt-[-4.5rem] md:pb-[2.69rem] md:pl-0 lg:pt-[2.7rem] lg:pb-[2.69rem]">
        <span className="md:block">{prefix} </span>
        <span className="md:block">{keyword}</span>
      </h3>
    </div>
  );
};

export default HeadingBlock;
