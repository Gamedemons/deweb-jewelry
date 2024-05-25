import styles from "./BestsellersSection.module.css";

import ImageCard from "../ui/ImageCard";

import bestseller_1 from "../../assets/jewelry/bestseller_1.jpg";
import bestseller_2 from "../../assets/jewelry/bestseller_2.jpg";
import bestseller_3 from "../../assets/jewelry/bestseller_3.jpg";

const BestsellersSection = () => {
  const bestsellers = [
    {
      id: "bestseller_1",
      image: bestseller_1,
      link: "",
      about: "Ivory Collection",
    },
    {
      id: "bestseller_2",
      image: bestseller_2,
      link: "",
      about: "Royal Collection",
    },
    {
      id: "bestseller_3",
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
    />
  ));
  
  return (
    <section id={styles.bestsellers}>
      <h1>Our Bestsellers</h1>
      <span id={styles.view_all}>VIEW ALL</span>
      <div id={styles.bestseller_card_wrapper}>{BestsellersCard}</div>
    </section>
  );
};

export default BestsellersSection;