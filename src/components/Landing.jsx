import {MousePointer2 } from "lucide-react";
import React from "react"; // Assuming you have a CSS file for styles
const Landing = () => {
  return (
    <div>
      <div className="w-full min-h-screen bg-zinc-900 pt-2">
        <div className="textstructure mt-40 px-20 md:px-16 lg:px-20">
          {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
            return (
              <div key={index} className="masker flex sm:mb-6">
                {index === 1 && (
                  <div className="mr-5 sm:mr-5 rounded-md w-[10vw] sm:w-[10vw] h-[4.5vw] sm:h-[4.5vw] relative top-[0.8vw] bg-white"></div>
                )}
                <h1 key={index} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-[Orbitron] leading-[6vw] sm:leading-[6vw] tracking-tighter flex text-white font-semibold relative">
                  {item}
                </h1>
              </div>
            );
          })}

          <div className="border-t-[1px] border-zinc-600 mt-32 sm:mt-32 flex flex-col sm:flex-row justify-between items-start sm:items-center py-5 sm:gap-0">
            {[
              "For Public And Privaet Companies",
              "From The First Pitch To IPO",
            ].map((item, index) => {
              return (
                <p
                  key={index}
                  className="text-sm sm:text-mdfont-light tracking-tight leading-none text-white"
                >
                  {item}
                </p>
              );
            })}
            <div className="start flex items-center gap-5">
              <div className="px-5 sm:px-5 border-[2px] border-zinc-500 text-white sm:text-base font-light rounded-full py-2">
                Start The Project
              </div>
              <div className="w-10 h-10 flex items-center justify-center text-white border-[2px] border-zinc-400 rounded-full">
                <MousePointer2 className="rotate-90 w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
