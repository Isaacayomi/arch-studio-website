import CustomButton from "./CustomButton";
import PageHeading from "./PageHeading";

import ARROW_ICON from "../assets/icons/icon-arrow.svg";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e) {
    e.preventDefault();
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let newErrors = { name: "", email: "", message: "" };

    if (!name || name.trim() === "") newErrors.name = "Please enter your name";
    if (!email || !regex.test(email))
      newErrors.email = "Please enter a valid email";
    if (!message || message.trim() === "")
      newErrors.message = "Please enter a message";

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      console.log("submitted");
      setName("");
      setEmail("");
      setMessage("");
    }
  }
  return (
    <form className="mb-[12.5rem] mx-4 relative lg:max-w-[69rem] lg:w-full lg:mx-auto lg:flex lg:px-10">
      <PageHeading
        className="mx-auto max-w-[21.875rem]"
        keyword="Connect with us"
      />

      <div className="flex flex-col justify-center items-center max-w-[35.75rem] mx-auto bg-none font-spartan lg:w-full lg:mx-auto">
        <div className="flex items-center w-full mb-[2.69rem] relative">
          <input
            type="text"
            placeholder="Name"
            className={`border-b w-full pb-[1.37rem] focus:border-b-[2px] focus:outline-none font-bold text-[1.25rem] tracking-[-0.0195rem] ${
              errors.name ? "border-red-500" : "border-very-dark-blue"
            }`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && (
            <span className="text-red-500 text-sm ml-4 whitespace-nowrap absolute right-0">
              <p>{errors.name}</p>
            </span>
          )}
        </div>
        <div className="flex items-center w-full mb-[2.69rem] relative">
          <input
            type="email"
            placeholder="Email"
            className={`border-b w-full pb-[1.37rem] focus:border-b-[2px] focus:outline-none font-bold text-[1.25rem] tracking-[-0.0195rem] ${
              errors.email ? "border-red-500" : "border-very-dark-blue"
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <span className="text-red-500 text-sm ml-4 whitespace-nowrap absolute right-0">
              <p>{errors.email}</p>
            </span>
          )}
        </div>
        <div className="flex items-center w-full mb-[2.69rem] relative">
          <input
            type="text"
            placeholder="Message"
            className={`border-b w-full pb-[1.37rem] focus:border-b-[2px] focus:outline-none font-bold text-[1.25rem] tracking-[-0.0195rem] ${
              errors.message ? "border-red-500" : "border-very-dark-blue"
            }`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {errors.message && (
            <span className="text-red-500 text-sm ml-4 whitespace-nowrap absolute right-0">
              <p>{errors.message}</p>
            </span>
          )}
        </div>
        <button
          onClick={handleSubmit}
          className="w-[5rem] h-[5rem] bg-very-dark-blue absolute bottom-[-2.3rem] right-0 cursor-pointer lg:hover:bg-medium-gey lg:right-[2.4rem]"
        >
          <span>
            <img src={ARROW_ICON} alt="Arrow icon" className="mx-auto" />
          </span>
        </button>
      </div>
    </form>
  );
};

export default Form;
