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
      <div className="h-[100%] container mb-10 mt-20    flex  items-center justify-center  flex-col-reverse lg:flex-row ">
        <div className="h-[100%] w-[100%]  flex items-center justify-center p-8 lg:justify-end ">
          <motion.img
            src={mainimg}
            className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px]  object-cover  rounded-full grayscale lg:w-[410px] lg:h-[410px]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}  
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className="h-full w-full p-6 flex items-center justify-center lg:justify-start ">
          <div className="">
            <div className="mb-4 lg:mb-12 lg:mt-7">
              <motion.h2
                className="text-2xl  font-bold md:text-4xl"
                initial={{ opacity: 0, y: -300 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 160 }}
              >
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Hello 👋 it`s Me Hassan and",
                    2000,

                    "I am React.js developer.",
                    2000,
                    `I am Node.js  developer.`,
                    2000,
                    "I am Coder.",
                    2000,
                    "I am Programer.",
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
              <motion.h3
                className=" text-lg font-semibold mb-2 md:text-3-xl/2"
                variants={item}
              >
                A Bit About Me
              </motion.h3>
              <motion.p
                className="text-md tracking-wider text-justify lg:w-[29rem]"
                variants={item}

              >
                Experienced front-end developer skilled in React.js, Tailwind
                CSS, and JavaScript. I excel at creating responsive, visually
                appealing user interfaces and optimizing component styling with
                Tailwind CSS. Strong understanding of backend fundamentals
                ensures smooth functionality and data flow. Passionate about
                intuitive solutions and collaboration. Let`s connect for
                innovative web development opportunities!
              </motion.p>
            </motion.div>
            <motion.div
              className="flex justify-center h-full mt-10 w-full lg:justify-start"
              initial="hidden"
              animate="visible"
              variants={container}
            >
              {[
                { endpoint: "/resume", endpointName: "Resume" },
                { endpoint: "/projects", endpointName: "Projects" },
              ].map((item, index) => (
                <Link key={index} to={item.endpoint}>
                  <motion.div
                    className={`w-[90px] border-2 mx-1 border-solid border-black hover:bg-white cursor-pointer transition-all h-[90px] duration-300 lg:w-[120px] lg:h-[120px] md:w-[110px] md:h-[110px]    text-sm lg:text-lg ${
                      (index == 0 && "bg-red-500") ||
                      (index == 1 && "bg-orange-400")
                    }  rounded-full flex items-center justify-center`}
                    variants={item}
                  >
                    <span className="font-bold">{item.endpointName}</span>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
