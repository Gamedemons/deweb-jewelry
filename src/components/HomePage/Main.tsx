import styles from "./Main.module.css";

import Hero from "./Hero";
import BestsellersSection from "./BestsellersSection";
import MottoSection from "./MottoSection";
import NewarrivalsSection from "./NewarrivalsSection";

const Main = () => {
  return (
    <main id={styles.main}>
      <Hero />
      <hr />
      <BestsellersSection />
      <MottoSection />
      <NewarrivalsSection />
    </main>
  );
};

export default Main;
