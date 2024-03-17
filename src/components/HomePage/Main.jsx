import React from "react";
import styles from "./Main.module.css";

import bestseller_1 from "../../assets/jewelry/bestseller_1.jpg";
import bestseller_2 from "../../assets/jewelry/bestseller_2.jpg";
import bestseller_3 from "../../assets/jewelry/bestseller_3.jpg";

import newarrivals_1 from "../../assets/jewelry/bestseller_1.jpg";
import newarrivals_2 from "../../assets/jewelry/bestseller_2.jpg";
import newarrivals_3 from "../../assets/jewelry/bestseller_3.jpg";

import divider_star from '../../assets/res/Divider - Star.svg'

import ImageCard from "../ui/ImageCard";
import Divider from "../ui/Divider";

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

  let newarrivals = [
    {
      id: "newarrivals_1",
      image: newarrivals_1,
      link: "",
      about: "Golden Band",
    },
    {
      id: "newarrivals_2",
      image: newarrivals_2,
      link: "",
      about: "Obsidian Ring",
    },
    {
      id: "newarrivals_3",
      image: newarrivals_3,
      link: "",
      about: "Happy Leaflet",
    },
  ];

  const BestsellersCard = bestsellers.map((bestseller) => (
    <ImageCard
      key={bestseller.id}
      image={bestseller.image}
      about={bestseller.about}
    ></ImageCard>
  ));

  const NewarrivalsCard = newarrivals.map((newarrival) => (
    <ImageCard
      key={newarrival.id}
      image={newarrival.image}
      about={newarrival.about}
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
          Because every piece carries a precious story
        </div>
        <button className="flat-btn">Shop</button>
      </section>

      <hr />

      <section id={styles.bestsellers}>
        <h1>Our Bestsellers</h1>
        <div id={styles.bestseller_card_wrapper}>{BestsellersCard}</div>
      </section>

      <Divider url={divider_star}/>
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
      <Divider url={divider_star}/>

      <section id={styles.newarrivals}>
        <h1>New Arrivals</h1>
        <div id={styles.newarrival_card_wrapper}>{NewarrivalsCard}</div>
      </section>
    </main>
  );
};

export default Main;
