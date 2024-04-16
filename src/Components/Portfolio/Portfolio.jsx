import styles from "../Portfolio/Portfolio.module.scss";
import Button from "../Ui/Button";
import Carousel from "react-bootstrap/Carousel";
import images from "../../Images/Home/image5.png";
import Slider from "../Portfolio/Slider";
import Polygon1 from "../../Images/Home/Polygon1.svg";
import Polygon2 from "../../Images/Home/Polygon2.svg";
export default function Portfolio() {
  return (
    <section className={styles.portfolio}>
      <img src={Polygon1} className={styles.polygon1} alt="Polygon1" />
      <img src={Polygon2} className={styles.polygon2} alt="Polygon2" />

      <div className={styles.textBox}>
        <span>
          Portfolio <Button variant="lookThemAll">Hamısına bax </Button>
        </span>
        <p>
          <b>Təhvil verdiyimiz çap layihələrinə nəzər salın</b>
          <Button variant="lookThemAll">Hamısına bax </Button>
        </p>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className={styles.carouselBox}
      >
        <Carousel style={{ width: "40rem" }} fade>
          <Carousel.Item>
            <img
              style={{ width: "20em", borderRadius: "12px" }}
              src={images}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: "20em", borderRadius: "12px" }}
              src={images}
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <Slider />
    </section>
  );
}
