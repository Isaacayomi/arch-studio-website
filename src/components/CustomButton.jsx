import { Link } from "react-router-dom";

const CustomButton = ({ children, className, to }) => {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};
export default CustomButton;
