import cn from "classnames";
import styles from "./testimonial.module.css";

interface TestimonialProps {
  image: string;
  author: string;
  position: string;
  review: string;
}

export const TestimonialCard = ({
  image,
  author,
  position,
  review,
}: TestimonialProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <div className={styles.image_container}>
          <img className={styles.image} src={image} alt={author} />
        </div>

        <div>
          <div className={cn("body-2-semibold", styles.title)}>{author}</div>
          <div className={cn("caption", styles.text)}>{position}</div>
        </div>
      </div>

      <div className={cn("body-2", styles.subtitle)}>{review}</div>
    </div>
  );
};

export default TestimonialCard;
