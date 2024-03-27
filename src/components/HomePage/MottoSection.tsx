import Divider from "../ui/Divider";
import styles from "./MottoSection.module.css"

import divider_star from '../../assets/res/Divider - Star.svg'

const MottoSection = () => {
  return (
    <>
      <Divider url={divider_star} />
      <section id={styles.motto}>
        <div id={styles.motto_quote}>
          We make high-quality, handcrafted jewelry that suits your personality!
        </div>
        <div id={styles.motto_phrase}>
          Each piece is crafted carefully and meticulously with care, <br />
          so it feels a part of your soul.
        </div>
        <button className="flat-btn">Learn More</button>
      </section>
      <Divider url={divider_star} />
    </>
  );
};

export default MottoSection;
