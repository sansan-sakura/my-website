import style from "./ProjectCard.module.scss";

export default function ProjectCard() {
  return (
    <div className={style.card}>
      <img src="/images/cherry.jpeg" alt="" className={style.image} />
      <div className={style.text}>
        <h3 className={style.title}>
          Lorem ipsum dolor sit, amet consectetur.
        </h3>

        <p className={style.p}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          beatae aut corrupti laborum tempora! Tempora id illo excepturi
          corporis.
        </p>
      </div>
    </div>
  );
}
