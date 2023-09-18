import style from "./GitBtn.module.scss";

export default function GitBtn() {
  return (
    <button className={style.gitBtn}>
      <a href="https://github.com/sansan-sakura" target="_blank" rel="noopener">
        <img src="/icon/git.png" alt="" className={style.gitMark} />
      </a>
    </button>
  );
}
