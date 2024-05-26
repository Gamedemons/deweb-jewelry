import styles from "./FilterOptions.module.css";

interface FilterOptions {
  id: string;
  about: string;
}

const FilterOptions = (props: { filtername: string; filterlist: FilterOptions[] }) => {
  const list = props.filterlist.map((item: FilterOptions) => (
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
