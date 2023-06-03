import { useState } from "react";
import style from "./ReadMoreBtn.module.scss";

export default function ReadMoreBtn() {
  const [length, setLength] = useState("shortest");

  return (
    <div className={style.btn_box}>
      <h5 className={style.h5}>Ajust Bio length:</h5>
      <div>
        <div className={style.circle_box}>
          <button
            className={style.circle}
            onClick={(e) => {
              setLength("shortest");

              changeColor(e);
            }}
          ></button>
          <button
            className={style.circle}
            onClick={(e) => {
              setLength("short");
              changeColor(e);
            }}
          ></button>
          <button
            className={style.circle}
            onClick={(e) => {
              setLength("middle");
              changeColor(e);
            }}
          ></button>
          <button
            className={style.circle}
            onClick={(e) => {
              setLength("long");
              changeColor(e);
            }}
          ></button>
          <button
            className={style.circle}
            onClick={(e) => {
              setLength("longest");
              changeColor(e);
            }}
          ></button>
        </div>
        <div className={style.length_box}>
          <p className={style.p}>shortest</p>
          <p className={style.p}>longest</p>
        </div>
      </div>
    </div>
  );
}
