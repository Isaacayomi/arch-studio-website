const Leaders = ({ src, name, title }) => {
  return (
    <div className="max-w-[19.4375rem] mx-auto">
      <img src={src} alt="Leader" className="w-full" />
      <h3 className="text-very-dark-blue text-[2rem] font-bold leading-[2.5rem] font-spartan pt-1">
        {name}
      </h3>
      <p className="text-dark-grey font-spartan text-[1.125rem] font-medium leading-[1.5rem] mb-[4.94rem] lg:mb-4">
        {title}
      </p>
    </div>
  );
};

export default Leaders;
