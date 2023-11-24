import React from "react";
import styles from "./article.module.css";
import cn from "classnames";

export default function Article({ title, date, type, image }) {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <img className={styles.image} src={image} alt={title} />
        <div className={cn("hairline-2", styles.type)}>
          <span>{type}</span>
        </div>
      </div>

      <div className={styles.title_container}>
        <div className={cn("body-2-semibold", styles.title)}>{title}</div>
        <div className={cn("caption", styles.date)}>{date}</div>
        <button className={cn("button-stroke")}>Read more</button>
      </div>
    </div>
  );
}
