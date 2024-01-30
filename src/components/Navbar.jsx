import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import logo from "../assets/main2imge.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex justify-between  shadow-md h-[10%] p-4 items-center fixed w-full top-0 bg-white z-30">
      <div className="flex items-center justify-center ml-2 lg:ml-8">
        <span>
          <img
            className="w-9 h-9 rounded-full bg-orange-500 lg:w-12 lg:h-12"
            src={logo}
            alt=""
          />
        </span>
        <h2 className="font-bold text-lg lg:text-3xl ml-2 lg:ml-3">
          <span className="text-orange-400 tracking-wider">H</span>assan
        </h2>
        <span className="text-sm ml-1 lg:text-lg mt-1 ">Web dev</span>
      </div>
      <div className="lg:hidden me-4">
        <Hamburger toggled={menuOpen} toggle={toggleMenu} />
      </div>
      <div
        className={` lg:flex items-center font-medium  ${
          menuOpen
            ? "absolute flex flex-col right-0 w-full h-[100vh] bg-white z-50 shadow-xl rounded-lg top-20 "
            : "hidden"
        }   `}
      >
        <Link
          to={"/"}
          onClick={() =>
            menuOpen === true ? setMenuOpen(!menuOpen) : menuOpen
          }
          className="lg:mx-2 rounded-lg  transition-all duration-200 hover:shadow-xl px-3"
        >
          Home
        </Link>
        |
        <Link
          onClick={() =>
            menuOpen === true ? setMenuOpen(!menuOpen) : menuOpen
          }
          to={"/resume"}
          className="lg:mx-2  rounded-lg transition-all duration-200 hover:shadow-xl px-3"
        >
          Resume
        </Link>
        |
        <Link
          to="/projects"
          onClick={() =>
            menuOpen === true ? setMenuOpen(!menuOpen) : menuOpen
          }
          className="lg:mx-2  rounded-lg transition-all duration-200 hover:shadow-xl px-3"
        >
          Projects
        </Link>
        |
        <Link
          onClick={() =>
            menuOpen === true ? setMenuOpen(!menuOpen) : menuOpen
          }
          to={"/contact"}
          className="lg:mx-2  rounded-lg transition-all duration-200 hover:shadow-xl px-3"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
