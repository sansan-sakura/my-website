import Button from "../Button";
import style from "./ProjectCard.module.scss";

export default function ProjectCard({ text, title, imageUrl, git, link }) {
  return (
    <div className={style.card}>
      <img src={imageUrl} alt="" className={style.image} />
      <div className={style.text}>
        <h3 className={style.title}>{title}</h3>

        <p className={style.p}>{text}</p>
        <div className={style.btn_wrapper}>
          <Button link={git} text={"</>"} />
          <Button link={link} text={"Interested?"} />
        </div>
      </div>
    </div>
  );
}
