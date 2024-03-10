import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const contactInfo = [
    {
      icon: <IoHome />,
      name: "Address",
      info: "888 Broadway, New York, 18813",
    },
    { icon: <FaPhoneAlt />, name: "Phone", info: "123456789" },
    {
      icon: <AiOutlineMail />,
      name: "Email",
      info: "example@example.com",
    },
  ];

  return (
    <>
      <p className="text-center text-3xl font-serif font-semibold">
        Visit Us or Leave Feedback
      </p>
      <div className="flex flex-wrap justify-center mt-3">
        {contactInfo.map((item, index) => (
          <div
            key={index}
            className="m-3 p-4 flex flex-col items-center w-48 md:w-auto"
          >
            <div className="flex bg-slate-gray rounded-full text-yellow-400 text-3xl items-center justify-center w-16 h-16 mb-2">
              {item.icon}
            </div>
            <p className="text-sm font-semibold font-serif">{item.name}</p>
            <p className="text-xs text-center">{item.info}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center mt-5">
        <form action="#" method="POST" className="w-full max-w-lg px-4">
          <input
            className="block unhover border border-gray-700 mb-4 px-3 w-full h-12 text-sm focus:outline-none"
            type="text"
            placeholder="Your name*"
            required
          />
          <input
            className="block unhover border border-gray-700 mb-4 px-3 w-full h-12 text-sm focus:outline-none"
            type="email"
            placeholder="Your e-mail*"
            required
          />
          <textarea
            className="border unhover border-gray-700 no-resize w-full px-3 py-2 text-sm focus:outline-none mb-4"
            name="message"
            id=""
            cols={30}
            rows={10}
            placeholder="Your message*"
            required
          ></textarea>
          <div className="flex items-center">
            <input
              id="formCheckBox"
              className="block mr-2"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="formCheckBox">
              I agree that my submitted data is being collected and saved
            </label>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className={`btn bg-yellow-400 text-concrete-gray py-2 px-5 mt-5 ${
                !isChecked && "text-gray-600 bg-yellow-500 cursor-not-allowed"
              }`}
              disabled={!isChecked}
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
