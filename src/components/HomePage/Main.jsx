import React from "react";
import styles from "./Main.module.css";

import bestseller_1 from "../../assets/jewelry/bestseller_1.jpg";
import bestseller_2 from "../../assets/jewelry/bestseller_2.jpg";
import bestseller_3 from "../../assets/jewelry/bestseller_3.jpg";

import ImageCard from "../ui/ImageCard";

const Main = () => {
  let bestsellers = [
    {
      id: "bestseller_1",
      image: bestseller_1,
      link: "",
      about: "Ivory Collection",
    },
    {
      id: "bestseller_1",
      image: bestseller_2,
      link: "",
      about: "Royal Collection",
    },
    {
      id: "bestseller_1",
      image: bestseller_3,
      link: "",
      about: "Serene Collection",
    },
  ];

  const BestsellersCard = bestsellers.map((bestseller) => (
    <ImageCard
      key={bestseller.id}
      image={bestseller.image}
      about={bestseller.about}
    ></ImageCard>
  ));

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

      <hr/>

      <section id={styles.bestsellers}>
        <h1>Our Bestsellers</h1>
        <div id={styles.bestseller_card_wrapper}>{BestsellersCard}</div>
      </section>

      <section id={styles.motto}>
        <div id={styles.motto_quote}>
          We make high-quality, handcrafted jewelry that suits your personality!
        </div>
        <div id={styles.motto_phrase}>
          Each piece is crafted carefully and meticulously with care, <br />
          so it feels a part of your soul.
        </div>
        <button className="flat-btn">Learn More</button>
      </section>
    </main>
  );
};

export default Main;
