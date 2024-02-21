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
    <nav className="flex justify-between  shadow-md h-[70px] md:h-[80px] p-4 items-center fixed w-full top-0 bg-white z-30">
      <div className="flex items-center justify-center ml-1 lg:ml-2">
        <h2 className="font-bold text-lg lg:text-3xl">
          <span className="text-orange-400 tracking-wider text-7xl/2 font-extrabold">
            H
          </span>
          assan
        </h2>
        <span className="text-sm ml-1 lg:text-lg mt-1 ">Web dev</span>
      </div>
      <div className="lg:hidden me-2">
        <Hamburger toggled={menuOpen} toggle={toggleMenu} />
      </div>
      <div
        className={`lg:flex items-center font-medium justify-center  ${
          menuOpen
            ? "absolute flex flex-col right-0 w-full h-[100vh] bg-white z-50 shadow-xl rounded-lg top-0 "
            : "hidden"
        }   `}
      >
        <div className="lg:hidden me-2 fixed right-4 top-3">
        <Hamburger toggled={menuOpen} toggle={toggleMenu} />
      </div>
        <Link
          to={"/"}
          onClick={() => (menuOpen ? setMenuOpen(!menuOpen) : menuOpen)}
          className="lg:mx-2  text-xl lg:text-sm rounded-lg  transition-all duration-200 hover:shadow-xl px-3"
        >
          Home
        </Link>
        |
        <Link
          to={"/resume"}
          onClick={() => (menuOpen ? setMenuOpen(!menuOpen) : menuOpen)}
          className="lg:mx-2  text-xl lg:text-sm  rounded-lg transition-all duration-200 hover:shadow-xl px-3"
        >
          Resume
        </Link>
        |
        <Link
          to="/projects"
          onClick={() => (menuOpen ? setMenuOpen(!menuOpen) : menuOpen)}
          className="lg:mx-2  text-xl lg:text-sm  rounded-lg transition-all duration-200 hover:shadow-xl px-3"
        >
          Projects
        </Link>
        |
        <Link
          to={"/contact"}
          onClick={() => (menuOpen ? setMenuOpen(!menuOpen) : menuOpen)}
          className="lg:mx-2  text-xl lg:text-sm  rounded-lg transition-all duration-200 hover:shadow-xl px-3"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
