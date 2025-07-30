import React from "react";
import mainimg from "../assets/hassan4.jpg";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiTailwindcss,
  SiRedux,
  SiGit,
  SiFramer,
  SiBootstrap,
  SiGithub,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const LandingPage = () => {
  const { isDarkMode } = useTheme();

  const skills = [
    {
      id: 1,
      icon: <SiMongodb size={30} style={{ color: "#4DB33D" }} />,
      name: "MongoDB",
    },
    {
      id: 2,
      icon: <FaNodeJs size={30} style={{ color: "#8CC84B" }} />,
      name: "Node.js",
    },
    {
      id: 3,
      icon: <SiReact size={30} style={{ color: "#61DAFB" }} />,
      name: "React.js",
    },
    {
      id: 4,
      icon: <SiExpress size={30} style={{ color: "#000000" }} />,
      name: "Express.js",
    },
    {
      id: 5,
      icon: <SiTailwindcss size={30} style={{ color: "#38BDF8" }} />,
      name: "Tailwind CSS",
    },
    {
      id: 6,
      icon: <SiFramer size={30} style={{ color: "#00D084" }} />,
      name: "Framer Motion",
    },
    {
      id: 7,
      icon: <SiRedux size={30} style={{ color: "#764ABC" }} />,
      name: "Redux Toolkit",
    },
    {
      id: 8,
      icon: <SiBootstrap size={30} style={{ color: "#7952B3" }} />,
      name: "Bootstrap",
    },
    {
      id: 9,
      icon: <SiGit size={30} style={{ color: "#F1502F" }} />,
      name: "Git",
    },
    {
      id: 10,
      icon: <SiGithub size={30} style={{ color: "#181717" }} />,
      name: "GitHub",
    },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col-reverse lg:flex-row items-center mt-[60px] pt-0 justify-center p-6 lg:p-12
        ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
    >
      {/* Image */}
      <motion.div
        className="w-full flex justify-center lg:justify-end p-4"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={mainimg}
          alt="Profile"
          className="w-48 h-48 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full object-cover grayscale hover:grayscale-0 border-4 border-gray-300 shadow-lg transition-all duration-500"
        />
      </motion.div>

      {/* Text Content */}
      <div className="w-full max-w-xl p-4 lg:p-0 text-center lg:text-left">
        <motion.h2
          className="text-2xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
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

        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-3">A Bit About Me</h3>
          <p className="text-base leading-relaxed text-justify tracking-wide max-w-lg mx-auto lg:mx-0">
            Experienced MERN Stack Developer skilled in React.js, Node.js,
            Express.js, MongoDB, and Firebase. I build responsive, user-friendly
            web applications using Tailwind CSS, and ensure seamless backend
            performance with strong API development and testing using Postman
            and RESTful APIs. I focus on clean architecture, efficient data
            flow, and collaborative development using Git & GitHub. With a
            strong understanding of both frontend and backend, I aim to deliver
            full-stack solutions that are both scalable and intuitive.
            Passionate about problem-solving, learning new technologies, and
            building real-world applications that make a difference.
          </p>
        </motion.div>

        {/* Skills Section */}
        <div>
          <h2 className="text-3xl font-bold mb-3 text-center lg:text-left">
            Skills
          </h2>
          <div
            className={`w-20 h-1 mb-8 mx-auto lg:mx-0 rounded-full ${
              isDarkMode ? "bg-blue-400" : "bg-blue-600"
            }`}
          ></div>

          <div className="overflow-hidden">
            <marquee
              behavior="scroll"
              direction="left"
              scrollamount="5"
              className="cursor-default"
            >
              <div className="flex gap-6 px-6">
                {[...skills, ...skills].map((skill, idx) => (
                  <div
                    key={idx}
                    className={`min-w-[100px] flex items-center justify-center p-4 rounded-xl border border-gray-400
                      backdrop-blur-sm bg-opacity-30 mx-2 transition-transform duration-300
                      ${
                        isDarkMode
                          ? "bg-gray-700 hover:bg-gray-600 text-white"
                          : "bg-white hover:bg-gray-100 text-black"
                      }
                      shadow-md hover:shadow-xl transform hover:scale-105`}
                  >
                    <div className="relative group cursor-pointer">
                      {skill.icon}
                      <div className="absolute hidden group-hover:block px-2 py-1 text-xs text-white bg-black rounded-md shadow-lg -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        {skill.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
