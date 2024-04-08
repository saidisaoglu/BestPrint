import "../src/App.scss";
import NavbarMobile from "./Components/NavbarMobile/NavbarMobile";
import HomePage from "./Pages/Home/HomePage";

export default function App() {
  return (
    <>
      <NavbarMobile />
      <main>
        <HomePage />
      </main>
    </>
  );
}
