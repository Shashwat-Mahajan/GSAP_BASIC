import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="w-full py-10 bg-[#004D43] rounded-tl-2xl rounded-tr-2xl">
      <div className="text-white border-t-2 border-b-2 border-zinc-300 gap-10 whitespace-nowrap overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-118%" }}
          stagger={{ amount: 1 }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="flex gap-10 whitespace-nowrap"
        >
          <h1 className="text-[15vw] leading-none font-[Orbitron] font-semibold ">
            WE ARE OCHI
          </h1>
          <h1 className="text-[15vw] leading-none font-[Orbitron] font-semibold ">
            WE ARE OCHI
          </h1>

          <h1 className="text-[15vw] leading-none font-[Orbitron] font-semibold ">
            WE ARE OCHI
          </h1>
          <h1 className="text-[15vw] leading-none font-[Orbitron] font-semibold ">
            WE ARE OCHI
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
