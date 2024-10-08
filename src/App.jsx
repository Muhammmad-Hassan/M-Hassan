import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./screens/HomePage";
import Footer from "./components/Footer";
import Projects from "./screens/Projects";
import Resume from "./screens/Resume";
import NotFound from "./screens/NotFound";
import CheckingSlider from "./screens/CheckingSlider";

function App() {
  return (
    <BrowserRouter basename="/M-Hassan" >
      <div className="h-calc-screen-160  w-[100%]">
        <Navbar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/check" element={<CheckingSlider />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
