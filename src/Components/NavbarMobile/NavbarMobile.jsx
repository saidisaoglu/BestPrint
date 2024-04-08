import styles from "../NavbarMobile/NavbarMobile.module.scss";
import Logo from "../../Images/Navbar/Logo.svg";
import BurgerMenu from "../../Images/Navbar/BurgerMenu.svg";
import SearchButton from "../../Images/Navbar/SearchButton.svg";
import LeftAsideMobile from "../LeftAsideMobile/LeftAsideMObile";
import { useState } from "react";

export default function NavbarMobile() {
  const [active, setActive] = useState(false);

  return (
    <header className={styles.header}>
      <nav>
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div className={styles.searchBtnBurgerMenu}>
          {/* <form action="" className={styles.searchBar}>
            <input type="search" name="search" pattern=".*\S.*" required />
            <button className={styles.searchBtn} type="submit">
              <img src={SearchButton} alt="" />
            </button>
          </form> */}
          <img src={SearchButton} alt="SearchButton" />
          <img
            onClick={() => setActive(true)}
            src={BurgerMenu}
            alt="Menu"
            className={styles.burgerMenu}
          />
        </div>
      </nav>
      <div className={styles.text}>
        <h2>Müxtəlif Xidmətlər Üzrə Portfoliomuz İlə Tanış Olun</h2>
        <p>
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by
        </p>
        <button>Əlaqə</button>
      </div>
      <LeftAsideMobile active={active} setActive={setActive} />
    </header>
  );
}
