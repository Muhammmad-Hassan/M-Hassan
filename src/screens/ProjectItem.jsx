import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

function ProjectItem({ title, description, img, codeLink, webLink }) {
  const { isDarkMode } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className={`flex flex-col lg:flex-row items-start gap-6 p-4 rounded-xl border transition-all duration-300 ${
        isDarkMode
          ? "border-gray-700 bg-gray-800"
          : "border-gray-300 bg-white shadow-sm"
      }`}
    >
      {/* Left: Text Content */}
      <div className="w-full lg:w-1/2 space-y-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-sm leading-relaxed text-justify">{description}</p>

        <div className="flex flex-wrap gap-3">
          {codeLink && (
            <a href={codeLink} target="_blank" rel="noopener noreferrer">
              <motion.button
                whileTap={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`px-4 py-1 rounded-md border text-sm font-semibold transition-colors duration-200 ${
                  isDarkMode
                    ? "border-gray-500 text-white hover:bg-gray-700"
                    : "border-gray-500 text-black hover:bg-gray-100"
                }`}
              >
                Source Code
              </motion.button>
            </a>
          )}
          {webLink && (
            <a href={webLink} target="_blank" rel="noopener noreferrer">
              <motion.button
                whileTap={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`px-4 py-1 rounded-md border text-sm font-semibold transition-colors duration-200 ${
                  isDarkMode
                    ? "border-gray-500 text-white hover:bg-gray-700"
                    : "border-gray-500 text-black hover:bg-gray-100"
                }`}
              >
                See Live
              </motion.button>
            </a>
          )}
        </div>
      </div>

      {/* Right: Image */}
      <div className="w-full lg:w-1/2">
        {isLoading && (
          <div className="w-full h-[240px] flex items-center justify-center rounded bg-gray-300 dark:bg-gray-700">
            <div className="w-8 h-8 border-4 border-white border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        )}
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          src={img}
          alt={title}
          onLoad={handleImageLoad}
          className={`w-full h-[240px] object-contain rounded-md shadow-sm transition-all ${
            isLoading ? "hidden" : "block"
          }`}
        />
      </div>
    </motion.div>
  );
}

export default ProjectItem;
