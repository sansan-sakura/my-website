import style from "./Heading.module.scss";
export default function Heading(props) {
  return <h3 className={style.heading}>{props.heading}</h3>;
}
