import styles from "../LeftAsideMobile/LeftAsideMobile.module.scss";
import CrossButton from "../../Images/Navbar/CrossButton.svg";
export default function LeftAsideMobile({ setActive, active }) {
  return (
    <aside className={`${styles.aside} ${active ? styles.active : ""}`}>
      <img
        onClick={() => {
          setActive(false);
        }}
        src={CrossButton}
        alt="button"
      />
      <ul>
        <li>Ana Səhifə</li>
        <li>Xidmətlər</li>
        <li>Porfolio</li>
        <li>Kompaniyalar</li>
        <li>Əlaqə</li>
      </ul>
    </aside>
  );
}
