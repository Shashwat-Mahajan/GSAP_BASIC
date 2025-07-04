import React from 'react'

const About = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="0.05"
      className="w-full p-20 bg-[#CDEA68] rounded-tl-2xl rounded-tr-2xl text-black"
    >
      <h1 className="text-[3.5vw] leading-[4vw] tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="w-full border-t-[2px] border-[#a1b562] mt-20 flex gap-5">
        <div className="w-1/2 mt-14.5">
          <h1 className="text-[3vw]">Our Approach:</h1>
          <button className="w-fit h-20 bg-zinc-800 text-white rounded-[40px] flex justify-between items-center px-10 gap-10">
            <h1 className="text-[1.5vw] uppercase">Read More</h1>
            <div className="rounded-full bg-white h-2 w-2"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-[#a1b562] mt-20"></div>
      </div>
    </div>
  );
}

export default About
