import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Power4 } from "gsap/all";

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({
      y: "100%",
    });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-8xl text-white tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[35vw]"
          >
            <h1 className="card text-emerald-400 text-8xl absolute z-[9] left-full -translate-x-1/2 -translate-y-1/2 top-1/2 flex overflow-hidden">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full  rounded-xl overflow-hidden">
              <div className='w-full h-full bg-cover bg-[url("https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png")]'></div>
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer w-1/2 h-[35vw] relative"
          >
            <h1 className="text-emerald-400 text-8xl absolute z-[9] right-full translate-x-1/3 top-1/2 -translate-y-1/2 flex overflow-hidden">
              {"BLACK".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full  rounded-xl overflow-hidden">
              <div className='w-full h-full bg-cover bg-[url("https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1100.png")]'></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
