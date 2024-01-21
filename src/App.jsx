import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="h-[100vh]  w-[100%]">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
