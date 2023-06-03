import { useEffect, useState } from "react";
import style from "./MyCard.module.scss";
import LinkedIn from "../LinkedIn";
import GitBtn from "../GitBtn";

import VanillaTilt from "vanilla-tilt";

export default function MyCard() {
  const me = [
    "Nature Lover 🌿🌳 ",
    "Fermantation Food   🧀",
    "French pastry baker  🥐 🍰",
    "book lover 📚",
  ];

  const [displayMe, setDisplayMe] = useState("");

  function changeMe() {
    useEffect(() => {
      let randomMe = me[Math.floor(Math.random() * me.length)];
      setDisplayMe(randomMe);
      console.log(randomMe);
    }, []);
  }

  return (
    <div className={style.card}>
      {/* <div className="your-element" data-tilt></div> */}
      <div className={style.card_inner}>
        <img src="/images/sakura.jpeg" alt="" className={style.myImage} />
        <div className={style.text}>
          <h1>I am Sakura,</h1>
          <h2>Front-end Developer, Mother of two boys,</h2>
          <h2 onMouseEnter={changeMe()}>{displayMe}</h2>
          <img src="/images/bird.png" alt="" className={style.bird} />
        </div>
        <div className={style.icon_container}>
          <GitBtn />
          <LinkedIn />
        </div>
      </div>
    </div>
  );
}
