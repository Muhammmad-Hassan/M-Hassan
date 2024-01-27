import React, { useEffect, useRef } from "react";
import mainimg from "../assets/main2imge.jpg";
import { Link } from "react-router-dom";
import gsap from "gsap";

function HomePage() {
  let imgRef = useRef(null);
  let helloRef = useRef(null);
  let bol1Ref1 = useRef(null);
  let bol1Ref2 = useRef(null);
  let bol1Ref3 = useRef(null);
  useEffect(() => {
    gsap.to(helloRef, {
      opacity: 1,
      duration: .5,
      x:-40,
      ease: "power3.out",
    });
    gsap.to(imgRef, {
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    });
    gsap.to([bol1Ref1 , bol1Ref2 , bol1Ref3], {
      opacity: 1,
      delay:.1,
      duration: .2,
      ease: "power3.out",
    });

    // Cleanup the animation on component unmount
  }, []);

  return (
    <>
      <div className="h-[100%] container mb-12  mt-56 lg:mt-32   flex  items-center justify-center  flex-col-reverse lg:flex-row ">
        <div className="h-[100%] w-[100%]  flex items-center justify-center p-8 lg:justify-end ">
          <img
            ref={(el) => (imgRef = el)}
            src={mainimg}
            className="w-[100%] h-[90%] opacity-0 rounded-full grayscale lg:w-[61%] lg:h-[70%]"
          />
        </div>

        <div className="h-full w-full p-6 flex items-center justify-center lg:justify-start ">
          <div className="">
            <div className=" mb-6 lg:mb-12 lg:mt-7">
              <h2 ref={(el) => (helloRef=el)} className="text-7xl ml-10 opacity-0 font-bold lg:text-8xl">
                Hello <span className="text-6xl">👋</span>
              </h2>
            </div>
            <div className="mt-2">
              <h3 className="text-2xl font-bold mb-2">A Bit About Me</h3>
              <p className="text-lg tracking-wider text-justify">
                Enthusiastic React.js developer with a knack for <br /> building
                engaging user interfaces, proficient in <br /> creating seamless
                and responsive web applications.
              </p>
            </div>
            <div className="flex justify-center  h-full mt-10 w-full lg:justify-start">
              <div ref={(el) =>(bol1Ref1 = el)} className="  w-[90px]  opacity-0 border-2 border-solid border-black hover:bg-white cursor-pointer transition-all h-[90px] lg:w-[150px] lg:h-[150px]  text-sm lg:text-lg   bg-orange-400  rounded-full   flex items-center justify-center">
                <span>Resume</span>
              </div>
              <Link to={"/projects"}>
                <div ref={(el) =>(bol1Ref2 = el)} className="  w-[90px] opacity-0 border-2 border-solid border-black hover:bg-white cursor-pointer transition-all h-[90px] lg:w-[150px] lg:h-[150px]  text-sm lg:text-lg  bg-red-500  rounded-full ml-3 flex items-center justify-center">
                  <span>Projects</span>
                </div>
              </Link>
              <div ref={(el) =>(bol1Ref3 = el)} className="  w-[90px] opacity-0 border-2 border-solid border-black hover:bg-white cursor-pointer transition-all h-[90px] lg:w-[150px]  lg:h-[150px] text-sm lg:text-lg bg-blue-300 rounded-full  ml-3 flex items-center justify-center">
                <span>Contacts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
