const HeroImage = ({ mobileImage, desktopHeroImage }) => {
  return (
    <>
      <img src={mobileImage} alt="Hero image" className="mx-auto md:hidden" />
      <img
        src={desktopHeroImage}
        className="hidden max-w-[39.6875rem] w-full md:block mx-auto pl-[2rem] lg:ml-[10.45rem]  xl:max-w-[50.625rem] xl:ml-0"
      />
    </>
  );
};

export default HeroImage;
