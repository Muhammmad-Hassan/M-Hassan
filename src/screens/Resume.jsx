// src/components/Resume.js
import React from "react";
import { motion, transform } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';



const Resume = () => {
  const start = { opacity: 0, x: -20 };
  const endhere = { opacity: 1, x: 0 };
  return (
    <div className="h-full container mx-auto p-4 mt-20">
      <section className="mb-6">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.1 }}
          className="text-2xl font-bold mb-2"
        >
          Skills
        </motion.h2>
        <ul>
          <motion.li initial={start} animate={endhere} transition={{ delay: 0.2, duration: 0.3 }}>React.js</motion.li>
          <motion.li initial={start} animate={endhere} transition={{ delay: 0.3, duration: 0.4 }}>Node.js</motion.li>
          <motion.li initial={start} animate={endhere} transition={{ delay: 0.4, duration: 0.5 }}>Express.js</motion.li>
          <motion.li initial={start} animate={endhere} transition={{ delay: 0.5, duration: 0.6 }}>Mongoose</motion.li>
          <motion.li initial={start} animate={endhere} transition={{ delay: 0.6, duration: 0.7 }}>HTML</motion.li>
          <motion.li initial={start} animate={endhere} transition={{ delay: 0.7, duration: 0.8 }}>CSS (Tailwind, Bootstrap)</motion.li>
        </ul>
      </section>

      <section className="mb-6">
        <motion.h2 initial={start} animate={endhere} transition={{ delay: 0.1, duration: .1 }} className="text-2xl font-bold mb-2">Education</motion.h2>
        <div>
          <motion.h3 initial={start} animate={endhere} transition={{ delay: .2, duration: .3 }}className="text-lg font-bold">Software Engineer (In Progress)</motion.h3>
          <motion.p initial={start} animate={endhere} transition={{ delay: .3, duration: .4 }}>Islamia University Peshawar, Expected <br />  Graduation Date (2027)</motion.p>
        </div>
        
      </section>

      {/* Add more sections for experience, projects, etc. */}
    </div>
  );
};

export default Resume;
