import style from "./LinkedIn.module.scss";

export default function LinkedIn() {
  return (
    <button className={style.linkedinBtn}>
      <img src="/icon/linkedinIcon.png" alt="" className={style.linkedin_icon} />
    </button>
  );
}
