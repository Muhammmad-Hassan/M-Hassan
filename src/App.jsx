import React from "react";
import logo from "./assets/logo.png";
import rightSplash from "./assets/rightSplash.png";
import playbtn from "./assets/playButton.png";
import namepng from "./assets/name.png";
import mainimg from "./assets/main2imge.jpg";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-[100%] w-[100%]">
      <Navbar />
      {/* Home */}
      <div className="h-[100%] w-[100%]  flex mt-32 items-center  flex-col-reverse lg:flex-row ">
        <div className="h-[100%] w-[100%]  flex items-center justify-center p-8 lg:justify-end ">
          <img
            src={mainimg}
            className="w-[100%] h-[100%]  rounded-full grayscale lg:w-[50%]"
          />
        </div>

        <div className="h-full w-full p-6 flex justify-center lg:justify-start ">
          <div className="">
            <div className=" mb-6 lg:mb-12">
              <h2 className="text-7xl font-bold lg:text-8xl">
                Hello
              </h2>
            </div>
            <div className="mt-2">
              <h3 className="text-2xl font-bold mb-2">A Bit About Me</h3>
              <p className="text-lg tracking-wider text-justify">
                Enthusiastic React.js developer with a knack for <br /> building
                engaging user interfaces, proficient in <br /> creating seamless and
                responsive web applications.
              </p>
            </div>
            <div className="flex justify-center  h-full mt-10 w-full lg:justify-start">
              <div className="w-[70px] h-[70px] lg:w-[150px] lg:h-[150px]  text-sm lg:text-lg   bg-orange-400  rounded-full   flex items-center justify-center">
                <span>Resume</span>
              </div>
              <div className="w-[70px] h-[70px] lg:w-[150px] lg:h-[150px]  text-sm lg:text-lg  bg-red-500  rounded-full ml-3 flex items-center justify-center">
                <span>Projects</span>
              </div>
              <div className="w-[70px] h-[70px] lg:w-[150px]  lg:h-[150px] text-sm lg:text-lg bg-blue-300 rounded-full  ml-3 flex items-center justify-center">
                <span>Contacts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
