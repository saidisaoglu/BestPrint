import styles from "../Portfolio/Portfolio.module.scss";
import Button from "../Ui/Button";
import LeftArrow from "../../Images/Home/leftArrow.png";
import RightArrow from "../../Images/Home/rightArrow.png";
import ServicesImg from "../../Images/Home/servicesImg.png";
import { useRef } from "react";
import images from "../../Images/Home/image5.png";
import Slider from "../Portfolio/Slider";
import Polygon1 from "../../Images/Home/Polygon1.svg";
import Polygon2 from "../../Images/Home/Polygon2.svg";
export default function Portfolio() {
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    const slider = sliderRef.current;
    let scrollAmount;

    if (window.innerWidth >= 320) {
      scrollAmount = 210;
    }
    if (window.innerWidth >= 400) {
      scrollAmount = 250;
    }
    if (window.innerWidth >= 500) {
      scrollAmount = 300;
    }
    if (window.innerWidth >= 768) {
      scrollAmount = 350;
    }

    if (slider) {
      if (direction === "left") {
        slider.scrollLeft -= scrollAmount;
      } else if (direction === "right") {
        slider.scrollLeft += scrollAmount;
      }
    }
  };
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
      <div className={styles.sliderContainer}>
        <div className={styles.leftArrow} onClick={() => handleScroll("left")}>
          <img src={LeftArrow} alt="Left Arrow" />
        </div>
        <div className={styles.sliderImages} ref={sliderRef}>
          <div className={styles.imageElement}>
            <div>
              <img src={ServicesImg} alt="Other Images 1" />
            </div>
            <a href="#">Vizitkart - Ətraflı</a>
          </div>
          <div className={styles.imageElement}>
            <div>
              <img src={images} alt="Other Images 2" />
            </div>
            <a href="#">Vizitkart - Ətraflı</a>
          </div>
          <div className={styles.imageElement}>
            <div>
              <img src={images} alt="Other Images 3" />
            </div>
            <a href="#">Vizitkart - Ətraflı</a>
          </div>
        </div>
        <div
          className={styles.rightArrow}
          onClick={() => handleScroll("right")}
        >
          <img src={RightArrow} alt="Right Arrow" />
        </div>
      </div>
      <Slider />
    </section>
  );
}
