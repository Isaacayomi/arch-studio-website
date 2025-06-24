import ARROW_ICON from "../assets/icons/icon-right-arrow.png";

const Address = ({ heading, mail, address, phone }) => {
  return (
    <div className="text-dark-grey font-spartan text-[1.125rem] max-w-[19.4375rem] w-full mx-auto pl-2 mb-[2.5rem] md:max-w-[35.8125rem] ">
      <p className="hidden lg:block text-[1.125rem] font-bold leading-[2.1875rem] pb-[0.87rem]">
        {heading}
      </p>
      <div className="md:flex md:items-center md:justify-between md:gap-[4.44rem] ">
        <p className=" text-[1.125rem] font-bold leading-[2.1875rem] pb-[0.87rem] lg:hidden">
          {heading}
        </p>

        <div className="leading-[1.5rem] font-medium whitespace-nowrap">
          <p>Mail: {mail}</p>
          <p>Address: {address}</p>
          <p>Phone: {phone}</p>
        </div>
      </div>
      <p className="flex items-center flex-start mt-[2.69rem] gap-[1.5rem] font-bold text-[#1B1D23] md:hover:cursor-pointer">
        View on Map{" "}
        <span>
          <img src={ARROW_ICON} alt="arrow-icon" />
        </span>
      </p>
    </div>
  );
};
export default Address;
