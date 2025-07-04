import React from 'react'

const Featured = () => {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-8xl text-white tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="px-20 mt-10">
        <div className="cards w-full flex gap-10">
          <div className="cardcontainer relative w-1/2 h-[35vw]">
            <h1 className="text-emerald-400 text-8xl absolute z-[9] left-full -translate-x-1/2 -translate-y-1/2 top-1/2">
              {"BLACK".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full  rounded-xl overflow-hidden">
              <div className='w-full h-full bg-cover bg-[url("https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png")]'></div>
            </div>
          </div>
          <div className="cardcontainer w-1/2 h-[35vw] relative">
            <h1 className="text-emerald-400 text-8xl absolute z-[9] right-full translate-x-1/3 top-1/2 -translate-y-1/2">
              {"BLACK".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full  rounded-xl overflow-hidden">
              <div className='w-full h-full bg-cover bg-[url("https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1100.png")]'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured
