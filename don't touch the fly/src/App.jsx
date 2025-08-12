import React, { useRef, useState, useEffect } from 'react';
import './style.css';
import gsap from 'gsap';

const App = () => {
  const imageRef = useRef();
  const [xValue, setXValue] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [yValue,setYvalue]=useState(0)

  useEffect(() => {
   gsap.to(imageRef.current, {
      x:xValue,
      y:yValue,
      rotate:rotate,
      duration:0.8
    });
  },[xValue,yValue,rotate]);

  const handleClick = () => {
    const random = gsap.utils.random(-500, 500, 100);
    const round=gsap.utils.random(-360,360,30);
    const randomY=gsap.utils.random(-300,450,50)
  
    setRotate(round);
    setXValue(random);
    setYvalue(randomY);
  };

  return (
    <div>
      <main>
       
       <img onClick={handleClick}  ref={imageRef} src="https://png.pngtree.com/png-vector/20250110/ourmid/pngtree-photorealistic-housefly-design-with-intricate-texture-and-veins-png-image_15127979.png" alt="" />
      </main>
    </div>
  );
};

export default App;
