import styles from "./CategoriesSection.module.css";

import ImageCard from "../ui/ImageCard";

import category_1 from "../../assets/jewelry/category (1).jpg";
import category_2 from "../../assets/jewelry/category (2).jpg";
import category_3 from "../../assets/jewelry/category (3).jpg";

const CatagoriesSection = () => {
  const categories = [
    {
      id: "category_1",
      image: category_1,
      link: "",
      about: "Ivory Collection",
    },
    {
      id: "category_1",
      image: category_2,
      link: "",
      about: "Royal Collection",
    },
    {
      id: "category_1",
      image: category_3,
      link: "",
      about: "Serene Collection",
    },
  ];

  const categoriesCard = categories.map((category) => (
    <ImageCard
      key={category.id}
      image={category.image}
      about={category.about}
    />
  ));

  return (
    <section id={styles.categories}>
      <h1>Categories</h1>
      <div id={styles.category_card_wrapper}>{categoriesCard}</div>
    </section>
  );
};

export default CatagoriesSection;
