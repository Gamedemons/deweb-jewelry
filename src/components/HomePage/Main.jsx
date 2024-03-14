import React from "react";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <main>
      <section id={styles.intro}>
        <div id={styles.intro_quote}>
          Jewelry that <br />
          <span>Creates Memories.</span>
        </div>
        <div id={styles.intro_phrase}>
          Because every piece caries a precious story
        </div>
        <button className="flat-btn">Shop</button>
      </section>

      <section id={styles.bestsellers}>
      </section>

      <section id={styles.motto}>
        <div id={styles.motto_quote}>
          We make high-quality, handcrafted jewelry that suits your personality!
        </div>
        <div id={styles.motto_phrase}>
          Each piece is crafted carefully and meticulously with care, <br/>
          so it feels a part of your soul.
        </div>
        <button className="flat-btn">Learn More</button>
      </section>
    </main>
  );
};

export default Main;
