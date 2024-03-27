import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <>
      <section id={styles.hero}>
        <div id={styles.hero_quote}>
          Jewelry that <br />
          <span>Creates Memories.</span>
        </div>
        <div id={styles.hero_phrase}>
          Because every piece carries a precious story
        </div>
        <button className="flat-btn">Shop</button>
      </section>
    </>
  );
};

export default Hero;