import React from "react";
import styles from "./Divider.module.css";

const Divider = (props) => {
  return (
    <span id={styles.divider_wrapper}>
      <img id={styles.divider} src={props.url} alt="" />
    </span>
  );
};

export default Divider;
