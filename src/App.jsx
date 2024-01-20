import React from "react";
import logo from "./assets/logo.png";
import rightSplash from "./assets/rightSplash.png";
import playbtn from "./assets/playButton.png";
import namepng from "./assets/name.png";
import mainimg from "./assets/main2imge.jpg";
import "./App.css";

function App() {
  return (
    <div>
      <div id="loader">
        <div id="wrapperload">
          <div className="elem">
            <h2 className="lblue">@Hassan</h2>
          </div>
          <div className="elem">
            <h3>UI/UX Designer</h3>
          </div>
          <div className="elem">
            <h3>loves to help brands.</h3>
          </div>
          <div className="elem">
            <h2 className="lblue">@Hassan</h2>
          </div>
        </div>
      </div>
      <nav>
        <h1 className="lblue">@Hassan</h1>
        <div id="links">
          <a className="navitem" href="#">
            Home
          </a>
          <a className="navitem" href="#">
            Contact
          </a>
          <i className="navitem ri-search-line"></i>
          <i id="menu" className="navitem ri-menu-2-line"></i>
        </div>
      </nav>
      <div id="sections">
        <img className="leftitem" id="splash" src={rightSplash} alt="" />
        <div id="left">
          <div id="smline"></div>
          <h4 className="leftitem">Hello, I am 👋</h4>
          {/* <img className="leftitem" src={namepng} alt=""/> */}
          <h4 className="lblue">Hassan</h4>
          <h5 className="leftitem">
            a designer from <span id="lblue">Pakistan.</span>
          </h5>
          <div className="leftitem" id="playbtn">
            <img src={playbtn} alt="" />
            <h5>
              see my <span className="bold">work profile</span>
            </h5>
          </div>
          <div className="leftitem" id="contact">
            <h3>Contact me</h3>
            <h6>
              Email : <span>someone@email.com</span>
            </h6>
            <h6>
              Contact Number: <span>+91-123456789</span>
            </h6>
          </div>
        </div>
        <div id="right">
          <img src={mainimg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
