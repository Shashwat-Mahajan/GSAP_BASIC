import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-screen bg-zinc-400 p-20 flex gap-5">
      <div className="w-1/2 h-full flex flex-col justify-between text-black">
        <div className="heading">
          <h1 className="text-[8vw] font-[Gilroy] leading-none -mb-10">EYE-</h1>
          <h1 className="text-[8vw] font-[Gilroy] leading-none -mb-10">
            OPENING
          </h1>
        </div>
        <img
          className="w-32"
          src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
        ></img>
      </div>
      <div className="w-1/2">
        <h1 className="text-[8vw] font-[Gilroy] leading-none -mb-10">
          Presentation
        </h1>
        <div className="dets mt-20">
          <a className="block text-3xl" href="#">FACEBOOK</a>
          <a className="block text-3xl" href="#">FACEBOOK</a>
          <a className="block text-3xl" href="#">FACEBOOK</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
