import cn from "classnames";
import styles from "./item.module.css";

interface ContentItem {
  title: string;
}

interface Project {
  title: string;
}

interface ItemProps {
  project: Project;
  image: string;
  title: string;
  content: ContentItem[];
}

export const Item = ({ project, image, title, content }: ItemProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <img className={styles.image} src={image} alt={project.title} />
      </div>

      <div className={styles.title_container}>
        <div className={cn("body-1-bold", styles.title)}>{title}</div>

        <ul className={styles.items}>
          {content.map((item: ContentItem) => (
            <li key={crypto.randomUUID()} className={styles.item}>
              <div className={cn("caption", styles.text)}>{item.title}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Item;
