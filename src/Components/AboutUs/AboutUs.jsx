import styles from "./AboutUs.module.scss";
import AboutUsImg from "../../Images/Home/AboutUs.svg";

export default function AboutUs() {
  return (
    <section className={styles.aboutUsContainer}>
      <div className={styles.aboutUsTextContainer}>
        <h3>Haqqımızda</h3>
        <b>Imperdiet turpis ut quis quis scelerisque ullamcorper eu tellus.</b>
        <p>
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment, so blinded by desire, that they cannot foresee the pain
          and trouble that are bound to ensue.
        </p>
        <button>Əlaqə</button>
      </div>
      <div className={styles.aboutUsImgContainer}>
        <img src={AboutUsImg} alt="" />
      </div>
    </section>
  );
}
