import Divider from "../ui/Divider";
import styles from "./TestimonialSection.module.css";

import divider_star from "../../assets/res/Divider - Star.svg";
import quotation from "../../assets/res/quotation.png";

const TestimonialSection = () => {
  return (
    <>
      <Divider url={divider_star} />
      <section id={styles.testimonial}>
        <div id={styles.testimonial_quotation}>
          <img src={quotation} alt="quotation.png" />
          <span>Testimonials</span>
        </div>

        <div id={styles.testimonial_phrase}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi esse
          eos odit voluptate voluptatem iure eaque architecto perferendis quam
          aspernatur totam nulla optio mollitia itaque harum perspiciatis rem,
          voluptatibus qui.
        </div>
      </section>
      <Divider url={divider_star} />
    </>
  );
};

export default TestimonialSection;
