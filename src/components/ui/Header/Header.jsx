import style from "./Header.module.scss";

export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.logoContainer}>
        <img src="/images/logo3.png" alt="" />
      </div>

      <nav>
        <input type="checkbox" className={style.toggler} />
        <div className={style.hamburger}>
          <div></div>
        </div>
        <div className={style.menu}>
          <div>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
