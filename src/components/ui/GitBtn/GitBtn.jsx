import style from "./GitBtn.module.scss";

export default function GitBtn() {
  return (
    <button className={style.gitBtn}>
      <img src="/icon/github-mark.png" alt="" className={style.gitMark} />
    </button>
  );
}
