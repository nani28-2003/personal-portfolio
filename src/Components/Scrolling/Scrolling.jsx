import React, { use } from "react";
import { motion, scale } from "motion/react";

import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Scrolling = () => {
  useEffect(() => {
    gsap.to(".scrool", {
      scale:1.4,
      scrollTrigger: {
        trigger: ".scrool",
      start:"top 45%",
    end:"bottom 40%",
   
        scrub: 0.9,
      },
    })
  },);
  return (
    <div className="scrool w-full overflow-hidden bg-[#004D43] border-gray-700 rounded-xl sticky">
      <div className="flex whitespace-nowrap text-white text-[10vh] py-10 gap-2 ">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 10,
            repeat: Infinity,
          }}
          className=" border-t-2 border-b-2 border-white"
        >
          CHARANDAS TALARI – REACT DEVELOPER
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 10,
            repeat: Infinity,
          }}
          className=" border-t-2 border-b-2 border-white"
        >
          CHARANDAS TALARI – REACT DEVELOPER
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 10,
            repeat: Infinity,
          }}
          className=" border-t-2 border-b-2 border-white"
        >
          CHARANDAS TALARI – REACT DEVELOPER
        </motion.div>
      </div>
    </div>
  );
};

export default Scrolling;
