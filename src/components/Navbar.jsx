import React, { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const scrollHandler = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = document.documentElement.clientHeight;
      const scrollPercentage =
        (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  const handlePhoneClick = () => {
    window.location.href = "tel:+923132402444";
  };

  return (
    <nav className="flex justify-between shadow-md h-[55px] md:h-[60px] p-4 items-center fixed w-full top-0 bg-white z-30">
      <div className="flex items-center justify-center ml-1 lg:ml-2">
        <Link to={"/"} className="font-bold text-lg lg:text-3xl">
          <span className="text-orange-400 tracking-wider text-7xl/2 font-extrabold">
            H
          </span>
          assan
        </Link>
        <span className="text-sm ml-1 lg:text-lg mt-1 ">Web dev</span>
        {/* <div
          className={`lg:flex items-center font-medium  justify-center ml-3  ${
            menuOpen
              ? "absolute flex   flex-col right-2 w-[200px] h-[200px] bg-white z-50 shadow-xl rounded-lg top-14 "
              : "hidden "
          }`}
        >
          <Link
            to={"/"}
            onClick={() => (menuOpen ? setMenuOpen(!menuOpen) : menuOpen)}
            className="lg:mx-2  text-xl lg:text-sm rounded-lg  transition-all duration-200 hover:shadow-xl px-3"
          >
            Home
          </Link>
          
        </div> */}
      </div>
      {/* <div className="lg:hidden me-2">
        <Hamburger toggled={menuOpen} toggle={toggleMenu} />
      </div> */}
      

      {/* The line that appears at the bottom of the navbar */}
      <div
        className="bg-orange-300 h-[1px] absolute bottom-0 left-0"
        style={{ width: `${scrollProgress}%` }}
      />
    <button
  onClick={handlePhoneClick}
  className="cursor-pointer bg-gradient-to-tl from-orange-500  to-purple-500 hover:opacity-90 px-3 text-white py-[6px] sm:px-6 rounded-md sm:text-md text-sm font-bold "
>
  Call Now
</button>

    </nav>
  );
};

export default Navbar;
