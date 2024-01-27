import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import contact from '../assets/contact.jpg'

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
    <div  ref={(el) => (fullPage = el)} className="w-full opacity-0">
        <img src={contact} alt="" className="w-full" />
    </div>
  )
}

export default Contact