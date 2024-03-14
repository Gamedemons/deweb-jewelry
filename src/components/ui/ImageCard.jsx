import React from "react";
import styles from "./ImageCard.module.css";

const ImageCard = (props) => {
  return (
    <div id={styles.card}>
      <div id={styles.image_wrapper}>
        <img src={props.image} alt={props.about} />
      </div>
      <span>{props.about}</span>
    </div>
  );
};

export default ImageCard;
