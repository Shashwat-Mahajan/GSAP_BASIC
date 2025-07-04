import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.1"
      className="w-full py-10 bg-[#004D43] rounded-tl-2xl rounded-tr-2xl"
    >
      <div className="text-white flex border-t-2 border-b-2 border-zinc-300 whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[15vw] leading-none font-[Orbitron] font-semibold pr-20"
        >
          WE ARE OCHI
        </motion.h1>

        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[15vw] leading-none font-[Orbitron] font-semibold pr-20"
        >
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
