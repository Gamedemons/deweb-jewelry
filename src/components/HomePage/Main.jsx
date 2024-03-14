import React from "react";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <main>
      <section id={styles.intro}>
        <div id={styles.intro_quote}>
            Jewelry that <br/>
            <span>Creates Memories.</span>
        </div>
        <div id={styles.intro_phrase}>
            Because every piece caries a precious story
        </div>
        <button className="flat-btn">Shop</button>
      </section>

      <section id={styles.intro}>
        <div id={styles.intro_quote}>
            Jewelry that <br/>
            <span>Creates Memories.</span>
        </div>
        <div id={styles.intro_phrase}>
            Because every piece caries a precious story
        </div>
        <button className="flat-btn">Shop</button>
      </section>
    </main>
  );
};

export default Main;
