import IMAGE_WELCOME from "../assets/images/image-welcome.jpg";

const IntroductionSection = () => {
  return (
    <section className="md:flex md:justify-center lg:flex lg:justify-center lg:items-center lg:gap-[7.81rem] lg:max-w-[69.375rem] lg:w-full lg:mx-auto lg:ml-[6rem] ">
      <div className="lg:mt-[16.81rem] xl:ml-0">
        <h3 className="text-very-dark-blue text-[3rem] non-italic font-bold leading-[3.25rem] tracking-[-0.10713rem] max-w-[19.4375rem] w-full mx-auto mt-[8.81rem] mb-[1.38rem] md:max-w-[27.875rem] md:w-full md:text-[4.5rem] md:leading-[4rem] md:tracking-[-0.125rem]  md:mt-[-4.5rem] md:pb-[2.69rem] md:mx-auto lg:pt-[2.7rem] lg:text-[4.5rem] lg:font-bold lg:leading-[4rem] lg:tracking-[-0.125rem] lg:pb-[2.69rem] ">
          Welcome to Arch Studio
        </h3>
        <p className="font-spartan max-w-[19.375rem] w-full mx-auto text-dark-grey mb-[7.06rem] md:max-w-[35.75rem] md:w-full md:text-[1.125rem] md:font-medium md:leading-[1.5rem] md:pb-[14.56rem] lg:ml-[5rem]">
          We have a unique network and skillset to help bring your projects to
          life. Our small team of highly skilled individuals combined with our
          large network put us in a strong position to deliver exceptional
          results. <br />
          <br />
          Over the past 10 years, we have worked on all kinds of projects. From
          stations to high-rise buildings, we create spaces that inspire and
          delight. <br />
          <br />
          We work closely with our clients so that we understand the intricacies
          of each project. This allows us to work in harmony the surrounding
          area to create truly stunning projects that will stand the test of
          time.
        </p>
      </div>

      <div>
        <img
          src={IMAGE_WELCOME}
          alt="Welcome image"
          className="hidden lg:block"
        />
      </div>
    </section>
  );
};

export default IntroductionSection;
