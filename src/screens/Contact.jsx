import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import contact from '../assets/contact2.avif'

function Contact() {
    let fullPage = useRef(null);

    useEffect(() => {
      gsap.to(fullPage, {
        opacity: 1,
        duration: 2.2,
        ease: "power3.out",
      });
    },[])

  return (
    <div  ref={(el) => (fullPage = el)} className="w-full h-full opacity-0">
        <img src={contact} alt="" className="w-full h-full object-cover opacity-80" />
    </div>
  )
}

export default Contact