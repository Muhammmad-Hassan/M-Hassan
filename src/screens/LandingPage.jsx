import React from "react";
import mainimg from "../assets/main2imge.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { SiMongodb, SiExpress, SiReact } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const LandingPage = () => {
 

  const skills = [
    {
      id: 1,
      icon: <SiMongodb size={30} style={{ color: "#4DB33D" }} />,
      name: "MongoDB",
    }, // green
    {
      id: 2,
      icon: <FaNodeJs size={30} style={{ color: "#8CC84B" }} />,
      name: "Node.js",
    }, // light green
    {
      id: 3,
      icon: <SiReact size={30} style={{ color: "#61DAFB" }} />,
      name: "React.js",
    }, // blue
    {
      id: 4,
      icon: <SiExpress size={30} style={{ color: "#000000" }} />,
      name: "Express.js",
    }, // black
  ];
  return (
    <div className="h-auto container mb-10 mt-20 flex items-center justify-center flex-col-reverse lg:flex-row">
      <div className="h-full w-full flex items-center justify-center p-8 lg:justify-end">
        <motion.img
          src={mainimg}
          className="w-[200px] h-[200px] sm:w-[380px] sm:h-[380px] object-cover rounded-full grayscale lg:w-[410px] lg:h-[410px]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="h-full w-full p-6 flex items-center justify-center lg:justify-start">
        <div>
          <div className="mb-4 lg:mb-12 lg:mt-7">
            <motion.h2
              className="text-2xl font-bold md:text-4xl"
              initial={{ opacity: 0, y: -300 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 160 }}
            >
              <TypeAnimation
                sequence={[
                  "Hello 👋 it’s Me Hassan and",
                  2000,
                  "I am React.js developer.",
                  2000,
                  "I am Node.js developer.",
                  2000,
                  "I am Coder.",
                  2000,
                  "I am Programmer.",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.h2>
          </div>

          <motion.div className="mt-2 ">
            <motion.h3 className="text-lg font-semibold mb-2 md:text-3xl">
              A Bit About Me
            </motion.h3>
            <motion.p className="text-md tracking-wider text-justify lg:w-[29rem]">
              Experienced MERN stack developer skilled in React.js, Node.js,
              Express, MongoDB, Tailwind CSS, and Framer Motion. I excel at
              creating responsive, visually appealing user interfaces, and
              optimizing component styling with Tailwind CSS. Proficient in
              adding animations with Framer Motion to enhance user experience.
              Strong understanding of backend fundamentals ensures smooth
              functionality and data flow. Passionate about intuitive solutions
              and collaboration. Let's connect for innovative web development
              opportunities!
            </motion.p>
          </motion.div>

          
          <div className="flex flex-col md:flex-row md:justify-center   h-full mt-4 w-full lg:justify-start space-x-4 space-y-4 md:space-y-0">
            <h2 className="text-xl font-bold mb-2">Skills:</h2>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="relative flex items-center justify-center p-2 rounded-md border border-gray-400 shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-100"
                >
                  <div
                    className="flex items-center justify-center cursor-pointer rounded-md font-medium relative group"
                    data-tooltip={skill.name}
                  >
                    {skill.icon}
                    <div className="absolute hidden group-hover:block px-2 py-1 text-xs text-white bg-black rounded-md shadow-lg -top-10 left-1/2 -translate-x-1/2">
                      {skill.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
