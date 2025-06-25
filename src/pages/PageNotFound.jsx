import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-very-light-grey text-very-dark-blue font-spartan px-6">
      <h1 className="text-[6rem] font-bold">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-dark-grey">
        Page Not Found
      </h2>
      <p className="text-medium-gey text-center max-w-md mb-6">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-2 inline-block bg-very-dark-blue text-white px-6 py-3 rounded-md hover:bg-dark-grey transition"
      >
        Go back home
      </Link>
    </div>
  );
};

export default PageNotFound;
