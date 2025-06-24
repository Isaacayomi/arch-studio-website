const PageIntro = ({heading, content}) => {
  return (
    <>
      <h3 className="text-very-dark-blue text-[3rem] non-italic font-bold leading-[3.25rem] tracking-[-0.10713rem] max-w-[19.4375rem] w-full mx-auto mt-[1.25rem] mb-[1.38rem] md:max-w-[27.875rem] md:w-full md:text-[4.5rem] md:leading-[4rem] md:tracking-[-0.125rem] md:pt-[10.2rem] md:pb-[2.38rem] md:mx-auto lg:pt-[8rem] lg:ml-[5.7rem]  ">
        {heading}
      </h3>
      <p className="font-spartan max-w-[19.375rem] w-full mx-auto text-dark-grey mb-[9.06rem] md:max-w-[30.75rem] md:px-[1.5rem] md:w-full md:text-[1.125rem] md:font-medium md:leading-[1.5rem] md:pb-24 md:mb-0 lg:ml-[5rem]">
       {content}
      </p>
    </>
  );
};

export default PageIntro;
