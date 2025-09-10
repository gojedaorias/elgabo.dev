import cn from "classnames";
import Link from "next/link";
import styles from "./article.module.css";

interface ArticleProps {
  title: string;
  date: string;
  type: string;
  image: string;
  slug: string;
}

export const ArticleCard = ({
  title,
  date,
  type,
  image,
  slug,
}: ArticleProps) => {
  return (
    <div className={styles.container}>
      <Link href={`/posts/${slug}`}>
        <div className={styles.image_container}>
          <img className={styles.image} src={image} alt={title} />
          <div className={cn("hairline-2", styles.type)}>
            <span>{type}</span>
          </div>
        </div>
      </Link>
      <div className={styles.title_container}>
        <div className={cn("body-2-semibold", styles.title)}>{title}</div>
        <div className={cn("caption", styles.date)}>{date}</div>
        <Link href={`/posts/${slug}`}>
          <button className={cn("button-stroke")}>Read more</button>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
