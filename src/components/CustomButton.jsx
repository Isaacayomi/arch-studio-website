import { Link } from "react-router-dom";

const CustomButton = ({ children, className, to }) => {
  return (
    <Link
      to={to}
      className={`${className} hover:bg-dark-grey active:bg-light-grey`}
    >
      {children}
    </Link>
  );
};
export default CustomButton;
