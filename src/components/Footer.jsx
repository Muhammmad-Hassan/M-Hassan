import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  const handleEmailClick = () => {
    window.location.href = "mailto:hassankhan5uy99@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+923132402444";
  };

  return (
    <>
      <hr className="h-[2px]" />
      <div className="flex flex-col lg:h-[100px] justify-between px-8 md:px-16 py-8 lg:flex-row">
        <div>
          <h2 className="font-semibold text-xl">Phone</h2>
          <span onClick={handlePhoneClick} className="cursor-pointer underline text-blue-500">+923132402444</span>
        </div>
        <div className="mt-6 lg:mt-0">
          <h2 className="font-semibold text-xl">Email</h2>
          <span onClick={handleEmailClick} className="cursor-pointer  underline text-blue-500">hassankhan5uy99@gmail.com</span>
        </div>
        <div className="mt-6 lg:mt-0">
          <h2 className="font-semibold text-xl">Follow Me</h2>
          <div className="flex">
            <a href="https://www.linkedin.com/in/muhammad-hassan-76a17b272">
              <FaLinkedin className="text-3xl hover:scale-110 transition-all duration-200" />
            </a>
            <a href="https://github.com/Muhammmad-Hassan">
              <FaGithub className="text-3xl ml-4 hover:scale-110 transition-all duration-200" />
            </a>
          </div>
        </div>
        <div className="mt-6 lg:mt-0">
          <span className="block">
            Hassan web dev
          </span>
          <span>+923132402444</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
