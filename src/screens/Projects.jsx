import React from "react";
import { motion } from "framer-motion";
import projects from "../assets/projects.jpg";

const ProjectItem = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: .3, duration: .5 }}
      className="flex mt-10 lg:mt-40 flex-col lg:flex-row rounded-md"
    >
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="lg:w-[75%] mb-5 text-justify tracking-wide mt-8 text-xl">
          {description}
        </p>
      </div>
      <motion.img
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: .5 }}
        src={projects}
        className="w-[500px] ml-auto rounded-md bg-blue-300"
        alt=""
      />
    </motion.div>
  );
};

function Projects() {
  return (
    <div className="h-auto w-full flex items-center justify-center p-6 mt-24 lg:mt-52">
      <div className="h-full w-full lg:w-[75%]">
        <motion.h1 className="text-4xl font-bold" 
        initial={{opacity:0, y:-40 , scale: .7}}
        animate={{opacity:1 , y:0 , scale:1}}
        transition={{delay:.3, duration:.5}}
        >Projects</motion.h1>
        <ProjectItem
          title="Project Name 01"
          description="this is my first portfolio and welcome to my portfolio
                        this is my first portfolio and welcome to my portfolio
                        this is my first portfolio and welcome to my portfolio
                        this is my first portfolio and welcome to my portfolio."
        />
        <ProjectItem
          title="Project Name 02"
          description="this is my first portfolio and welcome to my portfolio
                        this is my first portfolio and welcome to my portfolio
                        this is my first portfolio and welcome to my portfolio
                        this is my first portfolio and welcome to my portfolio."
        />
        <ProjectItem
          title="Project Name 03"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Eligendi cumque enim eaque iure adipisci reiciendis porro illum
                        dolore laboriosam alias iste veritatis odio perspiciatis animi,
                        facere iusto distinctio recusandae unde."
        />
      </div>
    </div>
  );
}

export default Projects;
