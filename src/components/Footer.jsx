import React, { useContext } from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext"; // import the ThemeContext

function Footer() {
  const { isDarkMode } = useTheme(); // use context to access isDarkMode

  const handleEmailClick = () => {
    window.location.href = "mailto:hassankhan5uy99@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+923132402444";
  };

  return (
    <footer className={`py-8 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
      <div className="container mx-auto px-8">
        <hr className={`${isDarkMode ? "bg-white" : "bg-gray-900"} h-[1.5px] mb-8`} />

        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
          {/* Phone Section */}
          <div className="mb-6 lg:mb-0 w-full lg:w-auto">
            <h2 className={`font-semibold text-xl ${isDarkMode ? "text-white" : "text-gray-900"}`}>Phone</h2>
            <span
              onClick={handlePhoneClick}
              className="cursor-pointer underline text-blue-400 hover:text-blue-500 transition duration-300"
            >
              Call Me
            </span>
          </div>

          {/* Email Section */}
          <div className="mb-6 lg:mb-0 w-full lg:w-auto">
            <h2 className={`font-semibold text-xl ${isDarkMode ? "text-white" : "text-gray-900"}`}>Email</h2>
            <span
              onClick={handleEmailClick}
              className="cursor-pointer underline text-blue-400 hover:text-blue-500 transition duration-300"
            >
              hassankhan5uy99@gmail.com
            </span>
          </div>

          {/* Social Media Section */}
          <div className="mb-6 lg:mb-0 w-full lg:w-auto flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
            <h2 className={`font-semibold text-xl ${isDarkMode ? "text-white" : "text-gray-900"}`}>Follow Me</h2>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/muhammad-hassan-76a17b272"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition duration-75"
              >
                <FaLinkedin className="text-3xl hover:scale-110 transform transition-all duration-200" />
              </a>
              <a
                href="https://github.com/Muhammmad-Hassan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition duration-300"
              >
                <FaGithub className="text-3xl hover:scale-110 transform transition-all duration-200" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Info Section */}
        <div className="text-center lg:text-left mt-6">
          <span className="block text-gray-400">Hassan Web Dev</span>
          <span className="text-gray-500">@Code</span>
        </div>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/+923132402444"
          className="fixed right-4 bottom-4 p-3 rounded-full bg-green-500 hover:bg-green-600 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-white" size={50} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
