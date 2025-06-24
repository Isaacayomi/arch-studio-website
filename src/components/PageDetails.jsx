const PageDetails = ({ children }) => {
  return (
    <p
      className="
        font-spartan text-dark-grey max-w-[19.375rem] mx-auto mb-[7rem]
        md:max-w-[35.75rem] md:text-[1.125rem] md:font-medium md:leading-[1.5rem]
        lg:mb-0 lg:max-w-none lg:mx-0 lg:text-left
      "
    >
      {children}
    </p>
  );
};
export default PageDetails;
