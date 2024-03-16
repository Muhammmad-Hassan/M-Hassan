import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./screens/HomePage";
import Footer from "./components/Footer";
import Projects from "./screens/Projects";
import Resume from "./screens/Resume";

function App() {
  return (
    <BrowserRouter basename="/M-Hassan" >
      <div className="h-[100vh]  w-[100%]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/resume" element={<Resume />} /> 
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
