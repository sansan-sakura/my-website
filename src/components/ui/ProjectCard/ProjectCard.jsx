import style from "./ProjectCard.module.scss";

export default function ProjectCard() {
  return (
    <div className={style.card}>
      <img src="/images/cherry.jpeg" alt="" className={style.image} />
      <div className={style.text}>
        <h3 className={style.title}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
          architecto.
        </h3>
        <h4 className={style.subtitle}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae.
        </h4>

        <p className={style.p}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          beatae aut corrupti laborum tempora! Tempora id illo excepturi
          corporis, cumque debitis, nulla labore quas adipisci itaque optio vero
          qui doloribus.
        </p>
      </div>
    </div>
  );
}
