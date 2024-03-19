import styles from "./Divider.module.css";

const Divider = (props:{
  url: string
}) => {
  return (
    <span id={styles.divider_wrapper}>
      <img id={styles.divider} src={props.url} alt="" />
    </span>
  );
};

export default Divider;
