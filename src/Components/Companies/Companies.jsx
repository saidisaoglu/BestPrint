import Button from "../Ui/Button";
import styles from "./Companies.module.scss";
import vizitkart from "../../Images/Home/vizitkart.png";
export default function Companies() {
  const cardBoxes = Array.from({ length: 2 }, (_, index) => (
    <div key={index} className={styles.card}>
      <div className={styles.image}>
        <img src={vizitkart} alt="Companies Image 1" />
      </div>
      <div className={styles.texts}>
        <p>16-24 Yanvar</p>
        <span>Vizitkart</span>
        <span>25 % Endirim</span>
        <Button variant="lookThemAll">Ətraflı</Button>
      </div>
    </div>
  ));

  return (
    <section className={styles.companies}>
      <div className={styles.textBox}>
        <span>
          Kompaniyalar <Button variant="lookThemAll">Hamısına bax </Button>
        </span>
        <p>
          <b>Sizləri düşünərək hazırladığımız kompaniyalarımızdan yararlanın</b>
          <Button variant="lookThemAll">Hamısına bax </Button>
        </p>
      </div>
      <div className={styles.cardsBox}>{cardBoxes}</div>
    </section>
  );
}
