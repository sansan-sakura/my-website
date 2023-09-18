import { useState } from "react";
import style from "./AboutMeText.module.scss";
import { aboutMeTexts } from "../../../data/aboutMeTexts";

export default function AboutMeText() {
  const [activeText, setActiveText] = useState(aboutMeTexts.shortest);

  return (
    <div>
      <p>{activeText}</p>
      <div className={style.btn_box}>
        <h5 className={style.h5}>Ajust Bio length:</h5>
        <div>
          <div className={style.circle_box}>
            {Object.keys(aboutMeTexts).map((key) => (
              <button
                key={key}
                style={{
                  backgroundColor:
                    aboutMeTexts[key] === activeText ? "#ffc6c6" : "white",
                }}
                className={style.circle}
                onClick={() => {
                  setActiveText(aboutMeTexts[key]);
                }}
              ></button>
            ))}
          </div>

          <div className={style.length_box}>
            <p className={style.p}>shortest</p>
            <p className={style.p}>longest</p>
          </div>
        </div>
      </div>
    </div>
  );
}
