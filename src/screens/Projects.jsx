import React from "react";
import projects from "../assets/projects.jpg";

function Projects() {
  return (
    <div className="h-auto w-full  flex items-center justify-center p-6  mt-24 lg:mt-52">
      <div className="h-full w-full lg:w-[75%] ">
        <h1 className="text-4xl font-bold ">Projects</h1>
        <div className="">
          <div className="flex mt-10 lg:mt-40 flex-col lg:flex-row  rounded-md">
            <div className="">
              <h2 className="text-2xl font-bold">Project Name 01</h2>
              <p className=" lg:w-[75%] mb-5 text-justify tracking-wide mt-8 text-xl">
                this is my first portfolio and welcome to my portfolio 
                this is my first portfolio and welcome to my portfolio 
                this is my first portfolio and welcome to my portfolio 
                this is my first portfolio and welcome to my portfolio. 
              </p>
            </div>
            <img src={projects} className="w-[500px] ml-auto rounded-md bg-blue-300" alt="" />
          </div>
        </div>
        <div className="">
          <div className="flex mt-10 lg:mt-40 flex-col lg:flex-row ">
            <div className="">
              <h2 className="text-2xl font-bold">Project Name 02</h2>
              <p className=" lg:w-[75%] mb-5 text-justify tracking-wide mt-8 text-xl">
                this is my first portfolio and welcome to my portfolio 
                this is my first portfolio and welcome to my portfolio 
                this is my first portfolio and welcome to my portfolio 
                this is my first portfolio and welcome to my portfolio. 
              </p>
            </div>
            <img src={projects} className="w-[500px] ml-auto rounded-md  bg-blue-300" alt="" />
          </div>
        </div>
        <div>
          <div className="flex mt-10 lg:mt-40  mb-5 lg:mb-12  flex-col lg:flex-row">
            <div>
              <h2 className="text-2xl font-bold">Project Name 03</h2>
              <p className="lg:w-[75%] text-justify h-full mb-5 tracking-wide mt-8 text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eligendi cumque enim eaque iure adipisci reiciendis porro illum
                dolore laboriosam alias iste veritatis odio perspiciatis animi,
                facere iusto distinctio recusandae unde.
              </p>
            </div>
            <img src={projects} className=" lg:mt-0 w-[500px] ml-auto rounded-md " alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
