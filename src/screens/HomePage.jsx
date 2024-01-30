import React from "react";
import mainimg from "../assets/main2imge.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HomePage = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <div className="h-[100%] container mb-12  mt-56 lg:mt-32   flex  items-center justify-center  flex-col-reverse lg:flex-row ">
        <div className="h-[100%] w-[100%]  flex items-center justify-center p-8 lg:justify-end ">
          <motion.img
            src={mainimg}
            className="w-[350px] h-[350px]  rounded-full grayscale lg:w-[500px] lg:h-[500px]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>

        <div className="h-full w-full p-6 flex items-center justify-center lg:justify-start ">
          <div className="">
            <div className="mb-6 lg:mb-12 lg:mt-7">
              <motion.h2
                className="text-3xl font-bold md:text-4xl"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: .6 }}
              >
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Hello 👋. it`s Me Hassan and",
                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                    "I am React.js developer 👨🏻‍💻 ", 
                    2000,
                    `I am Node.js  developer 👨🏻‍💻 `, 
                    2000,
                    "I am Web  developer 👨🏻‍💻 ", 
                    2000,
                    
                    "I am coder",
                    2000,
                    "I am Programer",
                    2000,
                    
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </motion.h2>
              
            </div>
            <motion.div
              className="mt-2"
              initial="hidden"
              animate="visible"
              variants={container}
            >
              <motion.h3 className="text-2xl font-bold mb-2" variants={item}>
                A Bit About Me
              </motion.h3>
              <motion.p
                className="text-lg tracking-wider text-justify"
                variants={item}
              >
                Enthusiastic React.js developer with a knack for <br /> building
                engaging user interfaces, proficient in <br /> creating seamless
                and responsive web applications.
              </motion.p>
            </motion.div>
            <motion.div
              className="flex justify-center h-full mt-10 w-full lg:justify-start"
              initial="hidden"
              animate="visible"
              variants={container}
            >
              <Link to="/resume">
                <motion.div
                  className="w-[90px] border-2 border-solid border-black hover:bg-white cursor-pointer transition-all h-[90px] lg:w-[150px] lg:h-[150px] text-sm lg:text-lg bg-orange-400 rounded-full flex items-center justify-center"
                  variants={item}
                >
                  <span>Resume</span>
                </motion.div>
              </Link>

              <Link to="/projects">
                <motion.div
                  className="w-[90px] border-2 border-solid border-black hover:bg-white cursor-pointer transition-all h-[90px] lg:w-[150px] lg:h-[150px] text-sm lg:text-lg bg-red-500 rounded-full ml-3 flex items-center justify-center"
                  variants={item}
                >
                  <span>Projects</span>
                </motion.div>
              </Link>

              <Link to="/contact">
                <motion.div
                  className="w-[90px] border-2 border-solid border-black hover:bg-white cursor-pointer transition-all h-[90px] lg:w-[150px] lg:h-[150px] text-sm lg:text-lg bg-blue-300 rounded-full ml-3 flex items-center justify-center"
                  variants={item}
                >
                  <span>Contacts</span>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
