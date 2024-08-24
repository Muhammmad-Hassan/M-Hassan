import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import pro1img from "../assets/pro1.png";
import pro2img from "../assets/pro2.png";
import codevenator from "../assets/codevenator.png";
import ProjectItem from "./ProjectItem";

function Projects() {
  const [visibleItems, setVisibleItems] = useState({}); // Track visibility of each item
  const refs = useRef([]); // Create refs for each item

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
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const projectList = [
    {
      id: 1,
      img: pro2img,
      webLink: "https://racelookup.com/store",
      title: "Race LookUp",
      description:
        "A venture dedicated to organizing and facilitating competitions and marathons for individuals engaged in racing activities",
    },
    {
      id: 2,
      codeLink: "",
      webLink: "https://codevenator.com/",
      img: codevenator,
      title: "Software Company",
      description:
        "Developed a dynamic and user-friendly web application using the MERN stack for our software company, designed to streamline internal processes and enhance client interactions",
    },
    {
      id: 3,
      codeLink: "https://github.com/Muhammmad-Hassan/My-cafe",
      webLink: "https://muhammmad-hassan.github.io/My-cafe",
      img: pro1img,
      title: "Food Web App",
      description:
        "This project is a dynamic web application for ordering food online. It provides users with a platform to browse through various food items, add them to their cart, and proceed with the checkout process",
    },
    
  ];

  return (
    <div id="projects" className="h-auto w-full flex items-center justify-center p-6 mt-5 border-t border-gray-500 ">
      <div className="h-full w-full lg:w-[90%]">
        <h1 className="text-4xl font-bold">Projects</h1>
        {projectList.map((item, index) => (
          <motion.div
            key={item.id}
            ref={(el) => (refs.current[index] = el)} // Assign each item to its ref
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: visibleItems[index] ? 1 : 0,
              y: visibleItems[index] ? 0 : 50,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
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
  );
}

export default Projects;
