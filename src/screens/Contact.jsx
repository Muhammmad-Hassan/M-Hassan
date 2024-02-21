import React, { useState } from "react";
import contact from '../assets/contact2.avif';
import { motion } from "framer-motion";

function Contact() {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="w-full h-full">
      {isLoading && (
        <div className="w-full h-full flex justify-center items-center bg-gray-200">
          <p className="text-xl text-gray-600">Loading...</p>
        </div>
      )}
      <motion.img
        src={contact} alt=""
        className={`w-full h-full object-cover opacity-80 ${isLoading ? 'hidden' : ''}`}
        onLoad={handleImageLoad}
      />
    </div>
  );
}

export default Contact;
