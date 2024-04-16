import Services from "../../Components/Services/Services";
import Portfolio from "../../Components/Portfolio/Portfolio";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Companies from "../../Components/Companies/Companies";

export default function HomePage() {
  return (
    <section>
      <Services />
      <Portfolio />
      <AboutUs />
      <Companies />
    </section>
  );
}
