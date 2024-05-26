import styles from "./Main.module.css";
import ItemCard from "../ui/ItemCard";
import FilterOptions from "./FilterOptions";

import bestseller_1 from "../../assets/jewelry/bestseller_1.jpg";
import bestseller_2 from "../../assets/jewelry/bestseller_2.jpg";
import bestseller_3 from "../../assets/jewelry/bestseller_3.jpg";

const Main = () => {
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
    {
      id: "bestseller_4",
      image: bestseller_1,
      link: "",
      about: "Ivory Collection",
    },
    {
      id: "bestseller_5",
      image: bestseller_2,
      link: "",
      about: "Royal Collection",
    },
    {
      id: "bestseller_6",
      image: bestseller_3,
      link: "",
      about: "Serene Collection",
    },
    {
      id: "bestseller_7",
      image: bestseller_1,
      link: "",
      about: "Ivory Collection",
    },
    {
      id: "bestseller_8",
      image: bestseller_2,
      link: "",
      about: "Royal Collection",
    },
    {
      id: "bestseller_9",
      image: bestseller_3,
      link: "",
      about: "Serene Collection",
    },
  ];

  const BestsellersCard = bestsellers.map((bestseller) => (
    <ItemCard
      key={bestseller.id}
      image={bestseller.image}
      about={bestseller.about}
    />
  ));

  const filterOptionList1 = {
    filterName: "Color",
    list: [
      {
        id: "Red",
        about: "Red",
      },
      {
        id: "Green",
        about: "Green",
      },
      {
        id: "Blue",
        about: "Blue",
      },
    ],
  };

  const filterOptionList2 = {
    filterName: "Brand",
    list: [
      {
        id: "Redmi",
        about: "Redmi",
      },
      {
        id: "Motorola",
        about: "Motorola",
      },
      {
        id: "Apple",
        about: "Apple",
      },
    ],
  };

  const filterOptionList3 = {
    filterName: "Rating",
    list: [
      {
        id: "4+",
        about: "4+",
      },
      {
        id: "3+",
        about: "3+",
      },
      {
        id: "2+",
        about: "2+",
      },
    ],
  };

  const filters = [filterOptionList1, filterOptionList2, filterOptionList3];

  const filterBoxes = filters.map((filter) => (
    <FilterOptions
      filtername={filter.filterName}
      filterlist={filter.list}
    ></FilterOptions>
  ));

  let filterMenuOpen = false;
  let sortTypes = [
    "Price (Low to High)", 
    "Price (High to Low)",
    "Relevancy",
    "Popularity"
  ];
  const sortMenuOpen = false;
  const currentSortType = 0;


  return (
    <main id={styles.main}>
      <section id={styles.item_category_info}>
        <span id={styles.current_category}>Category Name</span>
        <div>
          <span id={styles.filter_head} className={styles.btn_minimal}>Filters</span>
          {filterMenuOpen ? filterBoxes : null}
          <span id={styles.sort_head} className={styles.btn_minimal}>Sort : {sortTypes[currentSortType]}</span>
          {sortMenuOpen ? "Sort" : null}
        </div>
      </section>

      <section id={styles.items}>{BestsellersCard}</section>
    </main>
  );
};

export default Main;
