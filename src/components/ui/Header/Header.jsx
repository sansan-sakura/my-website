import style from "./Header.module.scss";

export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.logoContainer}>
        <img src="/images/logo3.png" alt="" />
      </div>

      <nav className={style.nav}>
        <input id="header-toggler" type="checkbox" className={style.toggler} />
        <label htmlFor="header-toggler" className={style.hamburger}>
          <div></div>
        </label>
        <div className={style.menu}>
          <div>
            <ul>
              <li>
                <a href="#aboutMe">About</a>
              </li>
              <li>
                <a href="#project">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
