import style from "./LinkedIn.module.scss";

export default function LinkedIn() {
  return (
    <button className={style.linkedinBtn}>
      <a
        href="https://www.linkedin.com/in/sakura-tanaka-251a36247/"
        target="_blank"
        rel="noopener"
      >
        <img
          src="/icon/linkedinIcon.png"
          alt=""
          className={style.linkedin_icon}
        />
      </a>
    </button>
  );
}
