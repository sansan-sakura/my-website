import style from "./Button.module.scss";
export default function ({ text, link }) {
  return (
    <button className={style.button}>
      <a href={link} target="_blank" rel="noopener">
        {text}
      </a>
    </button>
  );
}
