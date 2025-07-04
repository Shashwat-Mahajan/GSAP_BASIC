import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen flex justify-between items-center bg-zinc-900 gap-2 px-25">
      <div className="cardcontainer w-1/2 h-[50vh]">
        <div className="card relative w-full h-full bg-amber-500 rounded-3xl flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          ></img>
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">
            &copy;lksf
          </button>
        </div>
      </div>
      <div className="cardcontainer w-1/2 gap-2 h-[50vh] flex justify-between items-center">
        <div className="relative card w-1/2 h-full bg-amber-500 rounded-3xl flex justify-center items-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
          ></img>
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">
            &copy;lksf
          </button>
        </div>
        <div className="relative card w-1/2 h-full bg-amber-500 rounded-3xl flex justify-center items-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
          ></img>
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">
            &copy;lksf
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
