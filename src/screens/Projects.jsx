import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import pro1img from "../assets/pro1.png";
import carproject from "../assets/auto4.png";
import pro2img from "../assets/pro2.png";
import codevenator from "../assets/codevenator.png";
import ProjectItem from "./ProjectItem";
import { useTheme } from "../context/ThemeContext";

function Projects() {
  const { isDarkMode } = useTheme();
  const [visibleItems, setVisibleItems] = useState({});
  const refs = useRef([]);

  useEffect(() => {
    const onScroll = () => {
      refs.current.forEach((ref, index) => {
        if (ref) {
          const top = ref.getBoundingClientRect().top;
          if (top < window.innerHeight * 0.9) {
            setVisibleItems((prev) => ({ ...prev, [index]: true }));
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // Trigger once in case items are already in view on load

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const projectList = [
    {
      id: 1,
      img: pro2img,
      webLink: "https://racelookup.com/store",
      title: "Race LookUp",
      description:
        "A venture dedicated to organizing and facilitating competitions and marathons for individuals engaged in racing activities.",
    },
    {
      id: 2,
      codeLink: "",
      webLink: "https://client-codev.vercel.app/",
      img: codevenator,
      title: "Software Company",
      description:
        "Developed a dynamic and user-friendly web application using the MERN stack for our software company, designed to streamline internal processes and enhance client interactions.",
    },
    {
      id: 3,
      codeLink: "",
      webLink: "https://muhammmad-hassan.github.io/My-cafe",
      img: pro1img,
      title: "Food Web App",
      description:
        "A dynamic web app for online food ordering, enabling browsing, cart management, and checkout.",
    },
    {
      id: 4,
      codeLink: "",
      webLink: "https://topgunautomobiles.com/",
      img: carproject,
      title: "Car Trade Platform",
      description:
        "A secure platform to buy, sell, and trade cars featuring detailed listings and advanced search filters.",
    },
  ];

  return (
    <section
      id="projects"
      className={`min-h-screen px-6 py-12 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-6 text-center">Projects</h2>
        <div
          className={`w-24 h-1 mx-auto mb-12 rounded-full ${
            isDarkMode ? "bg-blue-400" : "bg-blue-600"
          }`}
        ></div>

        {/* Projects Grid */}
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {projectList.map((item, index) => (
            <motion.div
              key={item.id}
              ref={(el) => (refs.current[index] = el)}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: visibleItems[index] ? 1 : 0,
                y: visibleItems[index] ? 0 : 50,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.03 }}
              className={`bg-transparent border rounded-xl shadow-md transition-shadow duration-300 cursor-pointer
                ${
                  isDarkMode
                    ? "border-gray-700 hover:shadow-lg hover:border-blue-400"
                    : "border-gray-200 hover:shadow-lg hover:border-blue-600"
                }`}
            >
              <ProjectItem
                img={item.img}
                title={item.title}
                description={item.description}
                codeLink={item.codeLink}
                webLink={item.webLink}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
