// src/components/Resume.js
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
// import './Resume.css'; // Import Tailwind CSS

const Resume = () => {
  let fullPage = useRef(null);

  useEffect(() => {
    gsap.to(fullPage, {
      opacity: 1,
      duration: 2.2,
      ease: "power3.out",
    });
  },[])
  return (
    <div ref={(el) =>(fullPage =el)} className=" opacity-0 container mx-auto p-4 mt-20">
      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Skills</h2>
        <ul>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Mongoose</li>
          <li>HTML</li>
          <li>CSS (Tailwind, Bootstrap)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Education</h2>
        <div>
          <h3 className="text-lg font-bold">Software Engineer (In Progress)</h3>
          <p>University Name, Expected Graduation Date</p>
        </div>
      </section>

      {/* Add more sections for experience, projects, etc. */}
    </div>
  );
};

export default Resume;
