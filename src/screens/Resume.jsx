import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

import cvImg from "../assets/main2imge.jpg";

const Resume = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:hassankhan5uy99@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+923132402444";
  };

  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/muhammad-hassan-76a17b272/",
      "_blank"
    );
  };

  return (
    <motion.div // Wrap your main div with motion.div
      className=" mx-auto p-4 mt-20 px-7 lg:px-52"
      initial={{ opacity: 0 }} // Set initial animation properties
      animate={{ opacity: 1 }} // Set animation properties
      transition={{ duration: 1 }} // Set transition duration
    >
      <motion.div // Wrap your inner divs with motion.div
        className="w-full h-full flex justify-between"
        initial={{ x: "-100vw" }} // Set initial animation properties
        animate={{ x: 0 }} // Set animation properties
        transition={{ type: "spring", stiffness: 120 }} // Set transition properties
      >
        <div className="flex flex-col w-full">
          <div className="flex flex-col">
            <h1 className="md:text-[3vw] text-[6vw]  font-semibold">
              Muhammad Hassan
            </h1>
            <h3 className=" text-xl font-semibold text-blue-500">
              Web Devloper
            </h3>
          </div>
          <div className="flex w-[50%] justify-between flex-col md:flex-row">
            <div>
              <div className="min-w-max">
                <span>📞</span>
                <span className="ml-1 text-blue-500" onClick={handlePhoneClick}>
                  +923132402444
                </span>
              </div>
              <div>
                <span>🔗</span>
                <span
                  className="ml-1 cursor-pointer text-blue-500"
                  onClick={handleLinkedInClick}
                >
                  linkedin
                </span>
              </div>
            </div>
            <div>
              <div>
                <span className="text-blue-500">@</span>
                <span
                  className="ml-1 hover:underline hover:cursor-pointer text-blue-500"
                  onClick={handleEmailClick}
                >
                  hassankhan5uy99@gmail.com
                </span>
              </div>
              <div className=" min-w-max">
                <span>📍</span>
                <span className="ml-1">Canal Road Abdara Peshawar.</span>
              </div>
            </div>
          </div>
        </div>
        <img
          src={cvImg}
          className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-md object-cover"
          alt=""
        />
      </motion.div>
      <div className="flex justify-between lg:flex-row flex-col ">
        {/* sections */}
        <div>
          <motion.div // Wrap your education div with motion.div
            initial={{ opacity: 0 }} // Set initial animation properties
            animate={{ opacity: 1 }} // Set animation properties
            transition={{ delay: 0.5 }} // Set transition properties
          >
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold">Education</h2>
              <hr className="w-[100%] h-1 bg-gray-800" />
              {[
                {
                  id: 1,
                  subject: "SOFTWARE ENG",
                  school: "ISLAMIA COLLEGE UNIVERSITY PESHAWAR",
                  date: "2023 - 2027",
                },
                {
                  id: 2,
                  subject: " FA.c COMPUTER SCIENCE",
                  school: "CITY COLLEGE OF SCIENCE AND ARTS PESHAWAR",
                  date: "2021 - 2023",
                },
                {
                  id: 3,
                  subject: "SSC",
                  school: "AZA KHEL HIGH SCHOOL MATTANI PESHAWAR",
                  date: "2019 - 2021",
                },
              ].map((edudata) => (
                <div className="" key={edudata.id}>
                  <h3 className="text-xl font-semibold ">{edudata.subject}</h3>
                  <h5 className=" font-semibold text-blue-500 ">
                    {edudata.school}
                  </h5>
                  <div>
                    <span>&</span>
                    <span>{edudata.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="">
          <div>
            <h2 className="text-2xl font-semibold">About me</h2>
            <hr className="w-[100%] h-1 bg-gray-800" />
            <p className="lg:w-[250px]   text-justify">
              Experienced front-end developer skilled in React.js, Tailwind CSS,
              and JavaScript. I excel at creating responsive, visually appealing
              user interfaces and optimizing component styling with Tailwind
              CSS. Strong understanding of backend fundamentals ensures smooth
              functionality and data flow. Passionate about intuitive solutions
              and collaboration. Let`s connect for innovative web development
              opportunities!
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Skills</h2>
            <hr className="w-[100%] h-1 bg-gray-800" />

            <div className="flex mt-2 flex-wrap lg:w-[250px]">
              {[
                { id: 1, name: "HTML" },
                { id: 2, name: "CSS" },
                { id: 3, name: "JS" },
                { id: 4, name: "TAILWIND CSS" },
                { id: 5, name: "REACT.js" },
                { id: 6, name: "REDUX.TOOLKIT" },
                { id: 7, name: "NODE.js" },
                { id: 8, name: "EXPRESS.js" },
                { id: 9, name: "MONGOOSE" },
              ].map((skill) => (
                <h5
                  className="bg-gray-300 py-1 px-3 mx-1 my-1 font-semibold "
                  key={skill.id}
                >
                  {skill.name}
                </h5>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add more sections for experience, projects, etc. */}
    </motion.div>
  );
};

export default Resume;
