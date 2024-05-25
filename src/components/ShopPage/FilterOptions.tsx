import styles from "./FilterOptions.module.css";

interface Props {
  id: string;
  about: string;
}

const FilterOptions = (props: { filtername: string; filterlist: Props[] }) => {
  const list = props.filterlist.map((item: object) => (
    <li key={item.id}>
      <input type="checkbox" name={item.about} id={item.id} />
      <label htmlFor={item.about}>{item.about}</label>
    </li>
  ));

  //
  //

  return (
    <div id={styles.filter_box}>
      <button className={styles.accordian}>{props.filtername}</button>
      <ul className={styles.panel}>{list}</ul>
    </div>
  );
};

export default FilterOptions;
