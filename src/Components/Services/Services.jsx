import styles from "../Services/Services.module.scss";
import ServicesImg from "../../Images/Home/Services/servicesImg.png";
import RightButton from "../../Images/Home/Services/RightButton.svg";
import Button from "../Ui/Button";

export default function Services() {
  const cardBoxes = Array.from({ length: 6 }, (_, index) => (
    <div key={index}>
      <div className={styles.imgBox}>
        <img className={styles.cardImg} src={ServicesImg} alt="photo" />
      </div>
      <p>
        Broşür <img src={RightButton} alt="" />
      </p>
    </div>
  ));
  return (
    <section className={styles.services}>
      <div className={styles.textBox}>
        <p className={styles.textServices}>
          Xidmətlərimiz <Button variant="lookThemAll">Hamısına bax</Button>
        </p>
        <p>
          Keyfiyyətli xidmətlərimiz ilə, işinizi hər kəsdən fərqləndirin{" "}
          <button>Hamısına bax</button>
        </p>
      </div>
      <div className={styles.cardsBox}>{cardBoxes}</div>
    </section>
  );
}
