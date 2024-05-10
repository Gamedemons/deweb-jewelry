import styles from "./Main.module.css";

import Hero from "./Hero";
import CatagoriesSection from "./CategoriesSection";
import MottoSection from "./MottoSection";
import BestsellersSection from "./BestsellersSection";
import TestimonialSection from "./TestimonialSection";
import NewarrivalsSection from "./NewarrivalsSection";

const Main = () => {
  return (
    <main id={styles.main}>
      <Hero />
      <CatagoriesSection />
      <MottoSection />
      <BestsellersSection />
      <TestimonialSection />
      <NewarrivalsSection />
    </main>
  );
};

export default Main;
