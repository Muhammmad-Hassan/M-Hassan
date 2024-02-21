import React, { useState } from "react";
import { motion } from "framer-motion";



function ProjectItem ({ title, description, img, codeLink, webLink }){
    const [isLoading, setIsLoading] = useState(true);
  
    const handleImageLoad = () => {
      setIsLoading(false);
    };
  
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex mt-10 lg:mt-28 border-2 p-2 flex-col-reverse border-gray-500 lg:flex-row rounded-md"
      >
        <div>
            
          <h2 className="text-2xl font-bold text-center  lg:bg-white mt-1 lg:mt-0 text-gray-500 lg:text-start">
            {title}
          </h2>
          <p className="lg:w-[75%] mb-5 text-justify tracking-wide mt-8 text-xl">
            {description}
          </p>
          <div className="flex justify-around lg:justify-start gap-3 px-1">
            <a href={codeLink}>
              <button className="hover:bg-gray-300 transition-all duration-300 py-1 px-3 rounded-md font-semibold mt-2 text-[0.80rem] border border-gray-500">
                Source Code
              </button>
            </a>
            <a href={webLink}>
              <button className="hover:bg-gray-300 transition-all duration-300 py-1  px-3 rounded-md font-semibold mt-2 text-[0.80rem] border border-gray-500">
                See Live
              </button>
            </a>
          </div>
        </div>
  
        <div className="h-full w-full lg:border-l-2 border-gray-400 lg:pl-2">
          {isLoading && (
            <div className="flex items-center justify-center w-full h-[247px] bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          )}
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            src={img}
            alt=""
            onLoad={handleImageLoad}
            className={`w-full h-[247px] object-contain ${isLoading ? 'hidden' : ''}`}
          />
          <hr className="h-[2px] bg-gray-500 lg:hidden" />
        </div>
      </motion.div>
    );
  }

  export default ProjectItem;