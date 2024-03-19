import styles from "./ImageCard.module.css";

const ImageCard = (props:{
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

export default ImageCard;
