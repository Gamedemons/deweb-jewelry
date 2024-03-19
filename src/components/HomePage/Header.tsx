import styles from "./Header.module.css";

import Logo from "../../assets/logo/logo1.svg";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div id={styles.logo_wrapper}>
        <div id={styles.logo_bg}>
          <img id={styles.logo} src={Logo} alt="Vinayak Designs" />
        </div>
      </div>
      
      <div id={styles.user_details}>
        <div>User</div>
        <div>Cart</div>
      </div>
    </header>
  );
};

export default Header;
