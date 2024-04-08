import styles from "../Portfolio/Portfolio.module.scss";
import Button from "../Ui/Button";
export default function Portfolio() {
  return (
    <section className={styles.portfolio}>
      <div className={styles.textBox}>
        <span>
          Portfolio <Button variant="lookThemAll">Hamısına bax </Button>
        </span>
        <p>
          Təhvil verdiyimiz müxtəlif çap layihələrinə nəzər salın
          <Button variant="lookThemAll">Hamısına bax </Button>
        </p>
      </div>
      <div></div>
      <div></div>
    </section>
  );
}
