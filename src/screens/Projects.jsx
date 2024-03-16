import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import projects from "../assets/projects.jpg";
import por1img from "../assets/pro12.png";
import ProjectItem from "./ProjectItem";

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const element = ref.current;
    const onScroll = () => {
      if (element) {
        const top = element.getBoundingClientRect().top;
        setIsVisible(top < window.innerHeight * 1.3);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const projectList = [
    {
      id: 1,
      codeLink: "https://github.com/Muhammmad-Hassan/My-cafe",
      webLink: "https://muhammmad-hassan.github.io/My-cafe",
      img: por1img,
      title: "Food Web App",
      description:
        "This project is a dynamic web application for ordering food online. It provides users with a platform to browse through various food items, add them to their cart, and proceed with the checkout process",
    },
    {
      id: 2,
      img: projects,
      title: "Project 02",
      description:
        "that project is a dynamic web application for ordering food online. It provides users with a platform to browse through various food items, add them to their cart, and proceed with the checkout process",
    },
    {
      id: 3,
      img: projects,
      title: "Project 03",
      description:
        "they project is a dynamic web application for ordering food online. It provides users with a platform to browse through various food items, add them to their cart, and proceed with the checkout process",
    },
  ];

  return (
    <div className="h-auto w-full flex items-center justify-center p-6 mt-24 lg:mt-52">
      <div className="h-full w-full lg:w-[90%]">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          Projects
        </motion.h1>
        {projectList.map((item) => (
          <motion.div
            key={item.id}
            ref={ref}
            initial={item.id > 1 && { opacity: 0, y: 100 }}
            animate={
              item.id > 1 && {
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : 100,
              }
            }
            transition={item.id > 1 && { duration: item.id * 0.3 }}
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
