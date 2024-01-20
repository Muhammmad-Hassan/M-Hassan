import React from "react";
import logo from "./assets/logo.png";
import rightSplash from "./assets/rightSplash.png";
import playbtn from "./assets/playButton.png";
import namepng from "./assets/name.png";
import mainimg from "./assets/main2imge.jpg";
import "./App.css";

function App() {
  return (
    <div className="h-[100%] w-[100%]">
      <nav className="flex justify-between shadow-md h-[70px] p-4 items-center ">
        <div className="flex items-center justify-center ml-10">
          <span className="w-[25px] h-[25px] rounded-2xl  bg-orange-500"></span>
          <h2 className="font-bold text-2xl ml-3">Hassan</h2>
          <span className="text-md ml-2 mt-1">Web dev</span>
        </div>
        <div className="me-12">
          <a href="" className="mx-2">
            Resume
          </a>
          |
          <a href="" className="mx-2">
            Projects
          </a>
          |
          <a href="" className="mx-2">
            Contact
          </a>
        </div>
      </nav>
      {/* Home */}
      <div className="h-[100%] w-[100%]  flex mt-32 items-center">
        <div className="h-[100%] w-[50%]  flex items-center justify-end p-8">
          <img src={mainimg} className="w-[60%]  rounded-full grayscale" />
        </div>

        <div className="h-full w-[50%] px-8 ">
          <div className="h-full w-full">
            <div className="mb-12">
              <h2 className="font-bold text-8xl">Hello</h2>
            </div>
            <div className="mt-2">
              <h3 className="text-2xl font-bold">A Bit About Me</h3>
              <p className="text-lg ">
                Lorem ipsum dolor sit amet, consectetur <br />
                Lorem ipsum dolor sit amet, consectetur dolor
                <br />
                Lorem ipsum dolor amet, consectetur
              </p>
            </div>
            <div className="flex w-full h-full mt-10">
              <div className="w-[9.4vw] bg-orange-400 h-[20vh] rounded-full  ml-3 flex items-center justify-center">
                <span>Resume</span>
              </div>
              <div className="w-[9.4vw] bg-red-500 h-[20vh] rounded-full ml-3 flex items-center justify-center">
                <span>Projects</span>
              </div>
              <div className="w-[9.4vw] bg-blue-300 h-[20vh] rounded-full  ml-3 flex items-center justify-center">
                <span>Contacts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>hi</footer>
    </div>
  );
}

export default App;
