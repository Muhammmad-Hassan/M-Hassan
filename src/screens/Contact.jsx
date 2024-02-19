import React from "react";
import contact from '../assets/contact2.avif'
import {motion} from "framer-motion"

function Contact() {

  return (
    <div   className="w-full h-full ">
        <motion.img
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay: .2 , duration:.5}}
         src={contact} alt="" className="w-full h-full object-cover opacity-80" />
    </div>
  )
}

export default Contact