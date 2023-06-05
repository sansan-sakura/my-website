import { useEffect, useRef, useState } from "react";
import style from "./MyCard.module.scss";


import VanillaTilt from "vanilla-tilt";

export default function MyCard() {
  const me = [
    "Nature lover 🌿🌳 ",
    "Fermantation food chef 🧀",
    "French pastry baker  🥐 🍰",
    "Book lover 📚",
  ];

  const [displayMe, setDisplayMe] = useState(me[0]);
  const cardRef=useRef(null)
  const imgRef=useRef(null)
  const birdRef=useRef(null)

  function changeMe() {
    useEffect(() => {
      const interval=setInterval(()=>{
        let randomMe = me[Math.floor(Math.random() * me.length)];
        setDisplayMe(randomMe);
      },2000)   
     return ()=>{
      clearInterval(interval)
     }
    }, []);
  }

  useEffect(()=>{
    if(cardRef.current===null)return;
    const element =cardRef.current;
    VanillaTilt.init(element, {
      max:                    15,     
      scale:                  1,    
      speed:                  400,  
      transition:              true,
      perspective:             1000,
      
    });
  },[])

  useEffect(()=>{
    if(imgRef.current===null)return;
    const element =imgRef.current;
    VanillaTilt.init(element, {
      max:                    15,   
      scale:                  2,    
      speed:                  400,  
      transition:              true,
      perspective:             700,
      
    });
  },[])

  useEffect(()=>{
    if(birdRef.current===null)return;
    const element =birdRef.current;
    VanillaTilt.init(element, {
      reverse:                true, 
      max:                    45,     
      perspective:            500,  
      speed:                  300,    
      transition:             true,   
      axis:                   null,  
      reset:                  false,   
      "reset-to-start":       true,   
      easing:                 "cubic-bezier(.06,.60,.80,.99)",    
      glare:                  true,  
      "max-glare":            1,      
      "glare-prerender":      true,  
    });
  },[])

  

  


  return (
    <div className={style.card} ref={cardRef} data-tilt>
      <div className={style.card_inner}>
        <img src="/images/sakura.jpeg" alt="" className={style.myImage} ref={imgRef} data-tilt />
        <div className={style.text}>
          <h1>I am Sakura,</h1>
          <h2>Front-end Developer, Mother of two boys,</h2>
          <h2 onMouseEnter={changeMe()}>{displayMe}</h2>
          <img src="/images/bird.png" alt="" className={style.bird} ref={birdRef} data-tilt/>
        </div>
      
      </div>
    </div>
  );
}
