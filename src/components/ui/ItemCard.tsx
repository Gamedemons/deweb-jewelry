import styles from "./ItemCard.module.css";

const ItemCard = (props:{
  image: string,
  about: string
}) => {
  return (
    <div id={styles.card}>
      <div id={styles.image_wrapper}>
        <img src={props.image} alt={props.about} loading="lazy"/>
      </div>
      <span>{props.about}</span>
    </div>
  );
};

export default ItemCard;