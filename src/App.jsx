import React, { use } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useState } from "react";

const App = () => {
  const [circle, setCircle] = useState(0);
  const [circley, setCircley] = useState(0);
  const [rotateq, setRotateq] = useState(0);
  const random = gsap.utils.random(-500, 500, 100);
  const randomy = gsap.utils.random(-500, 500, 100);
  const rotate = gsap.utils.random(-200, 200, 30);

  const imageRef = useRef();

  const { contextSafe } = useGSAP();

  const rotateBox = contextSafe(() => {
    gsap.to(imageRef.current, {
      duration: 0.5,
      x: circle,
      rotate: rotateq,
      y: circley,
    });
  });

  return (
    <main>
      <button
        onClick={() => {
          setCircle(random);
          setRotateq(rotate);
          setCircley(randomy);
          console.log(random);
          rotateBox();
        }}
      >
        MOve
      </button>
      <img ref={imageRef} src="../public/images/messi.png"></img>
    </main>
  );
};

export default App;
