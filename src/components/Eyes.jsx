import React, { useEffect } from 'react'
import { useState } from 'react'

const Eyes = () => {

    const [rotate, setRotate] = useState(0);

    useEffect((e) => {
        window.addEventListener("mousemove",(e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angleRad = Math.atan2(deltaY, deltaX);
            var angleDeg = (angleRad * 180) / Math.PI;  

            setRotate(angleDeg-180);
            
        })
    })
    
  return (
    <div className="w-full h-screen eyes overflow-hidden">
      <div data-scroll data-scroll-speed="-0.7" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div className="relative rounded-full bg-zinc-950 w-2/3 h-2/3">
              <div
                style={{ transform: ` rotate(${rotate}deg)` }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
              >
                <div className="rounded-full bg-white w-10 h-10"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div className="relative rounded-full bg-zinc-950 w-2/3 h-2/3">
              <div
                style={{ transform: ` rotate(${rotate}deg)` }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
              >
                <div className="rounded-full bg-white w-10 h-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes
