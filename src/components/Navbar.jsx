import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex justify-between  shadow-md h-[10%] p-4 items-center fixed w-full top-0 bg-white z-30">
      <div className="flex items-center justify-center ml-4 lg:ml-10">
        <span className="w-4 h-4 rounded-full bg-orange-500 lg:w-7 lg:h-7"></span>
        <h2 className="font-bold text-lg lg:text-3xl ml-2 lg:ml-3">
          <span className="text-orange-400 tracking-wider">H</span>assan
        </h2>
        <span className="text-sm ml-1 lg:text-lg mt-1">Web dev</span>
      </div>
      <div className="lg:hidden me-4">
        <Hamburger toggled={menuOpen} toggle={toggleMenu} />
      </div>
      <div
        className={` lg:flex items-center  ${
          menuOpen
            ? "absolute flex flex-col right-0 w-full h-[100vh] bg-white z-50 shadow-xl rounded-lg top-20 "
            : "hidden"
        }   `}
      >
        <Link to={"/"} onClick={toggleMenu} className="lg:mx-2 rounded-lg  hover:bg-blue-200 px-3">
          Home
        </Link>
        |
        <Link  onClick={toggleMenu} className="lg:mx-2  rounded-lg hover:bg-blue-200 px-3">
          Resume
        </Link>
        |
        <Link to="/projects" onClick={toggleMenu} className="lg:mx-2  rounded-lg hover:bg-blue-200 px-3">
          Projects
        </Link>
        |
        <Link onClick={toggleMenu} className="lg:mx-2  rounded-lg hover:bg-blue-200 px-3">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
