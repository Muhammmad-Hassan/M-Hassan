import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr className=" h-[2px]" />
      <div className=" flex flex-col h-[20%] justify-between px-16 py-8 lg:flex-row">
        <div>
          <h2 className=" font-semibold text-2xl">Phone</h2>
          <span>+923132402444</span>
        </div>
        <div className="mt-6 lg:mt-0">
          <h2 className=" font-semibold text-2xl">Email</h2>
          <span>hassankhan5uy99@gmail.com</span>
        </div>
        <div className="mt-6 lg:mt-0">
          <h2 className=" font-semibold text-2xl">Follow Me</h2>
          <div className="flex">
            <a href="https://www.linkedin.com/in/muhammad-hassan-76a17b272">
              <FaLinkedin className="text-3xl hover:scale-110 transition-all duration-200 " />
            </a>
            <a href="https://github.com/Muhammmad-Hassan">
              <FaGithub className="text-3xl ml-4 hover:scale-110 transition-all duration-200" />
            </a>
          </div>
        </div>
        <div className="mt-6 lg:mt-0">
          <span className="block">
            Copyright 2024 by Refsnes Data. All Rights Reserved.
          </span>
          <span>+923132402444</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
