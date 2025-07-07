import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import darkSound from "../assets/sounds/dark.mp3";
import lightSound from "../assets/sounds/light.mp3";
import { motion } from "framer-motion";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);

  // Refs for audio elements
  const darkAudioRef = useRef(null);
  const lightAudioRef = useRef(null);

  useEffect(() => {
    const scrollHandler = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const handlePhoneClick = () => {
    window.location.href = "tel:+923132402444";
  };

  const handleThemeToggle = () => {
    if (isDarkMode) {
      lightAudioRef.current.play();
    } else {
      darkAudioRef.current.play();
    }
    toggleDarkMode();
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-30 shadow-md px-4 md:px-8 h-[60px] flex items-center justify-between ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Audio elements */}
      <audio ref={darkAudioRef} src={darkSound} />
      <audio ref={lightAudioRef} src={lightSound} />

      {/* Brand */}
      <div className="flex items-center space-x-2">
        <Link
          to="/"
          className="text-2xl sm:text-3xl font-extrabold tracking-tight"
        >
          <span className="text-orange-400">H</span>assan
        </Link>
        <span className="text-xs sm:text-sm mt-[2px] text-gray-500">
          Web Dev
        </span>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-4">
        {/* Theme Toggle */}
        <motion.button
          onClick={handleThemeToggle}
          className="relative text-xl sm:text-2xl focus:outline-none group"
          aria-label="Toggle Theme"
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.03, 1],
            rotate: [0, 0.5, 0], // subtle tilt
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.1,
            rotate: 5,
            transition: { type: "spring", stiffness: 300, damping: 15 },
          }}
          whileTap={{
            scale: 0.95,
            rotate: -5,
            transition: { type: "spring", stiffness: 500, damping: 20 },
          }}
        >
          <div className="p-2 rounded-full bg-gradient-to-tr from-purple-500 to-orange-400 text-white shadow-xl group-hover:shadow-[0_0_12px_rgba(255,165,0,0.5)] transition-all duration-300">
            {isDarkMode ? (
              <FaSun className="text-yellow-300 drop-shadow-sm" />
            ) : (
              <FaMoon className="text-blue-300 drop-shadow-sm" />
            )}
          </div>
        </motion.button>
        {/* Call Button */}
        <button
          onClick={handlePhoneClick}
          className="bg-gradient-to-r from-orange-500 to-purple-500 hover:opacity-90 text-white font-semibold text-sm sm:text-base px-4 py-1.5 rounded-md transition duration-200"
        >
          Call Now
        </button>
      </div>

      {/* Scroll Line Progress */}
      <div
        className="absolute bottom-0 left-0 h-[3px] bg-orange-400 transition-all duration-200"
        style={{ width: `${scrollProgress}%` }}
      />
    </nav>
  );
};

export default Navbar;
