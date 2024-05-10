import styles from "./NewarrivalsSection.module.css";

import ImageCard from "../ui/ImageCard";

import newarrivals_1 from "../../assets/jewelry/newarrival (1).png";
import newarrivals_2 from "../../assets/jewelry/newarrival (2).png";
import newarrivals_3 from "../../assets/jewelry/newarrival (3).png";

const NewarrivalsSection = () => {
  const newarrivals = [
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

  const NewarrivalsCard = newarrivals.map((newarrival) => (
    <ImageCard
      key={newarrival.id}
      image={newarrival.image}
      about={newarrival.about}
    ></ImageCard>
  ));

  return (
    <section id={styles.newarrivals}>
      <h1>New Arrivals</h1>
      <div id={styles.newarrival_card_wrapper}>{NewarrivalsCard}</div>
    </section>
  );
};

export default NewarrivalsSection;
