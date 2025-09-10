import { Testimonial } from "@/components/Cards";
import { testimonials } from "@/mocks/testimonials";
import cn from "classnames";
import styles from "./testimonials.module.css";

const Testimonials = () => {
  return (
    <section className={cn("section")}>
      <div className={styles.container}>
        <div className={styles.title_container}>
          <span className={cn("hairline-2", styles.text)}>Testimonials</span>
          <h1 className={cn("h2", styles.title)}>What creators are saying.</h1>
        </div>

        <div className={styles.testimonials}>
          {testimonials.map((testimonial) => (
            <Testimonial key={crypto.randomUUID()} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
