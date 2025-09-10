import cn from "classnames";
import Link from "next/link";
import styles from "./cta.module.css";

const Cta = () => {
  return (
    <div className={cn("section")}>
      <div className={styles.container}>
        <div className={styles.title_container}>
          <span className={cn("hairline-2", styles.text)}>CONTACT ME</span>
          <h1 className={cn("h1", styles.title)}>Let's work together.</h1>
        </div>

        <div>
          <p className={cn("body-2", styles.subtitle)}>
            Embark on a journey of collaboration and innovation with me. Reach
            out now to transform your vision into reality.
          </p>

          <Link href="/contact">
            <button className={cn("button")}>Get in touch</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cta;
