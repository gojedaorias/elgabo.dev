import React from "react";
import styles from "./introduction.module.css";
import cn from "classnames";
import Item from "./Item";

export default function Introduction({ project }) {
  return (
    <section className={cn("section", styles.section)}>
      <div className={styles.container}>
        <div className={styles.image_container}>
          <img
            className={styles.image}
            src={project.images[1]}
            alt={project.title}
          />
        </div>

        <div className={styles.title_container}>
          <div className={cn("body-1-bold", styles.title)}>Introduction</div>

          <div className={cn("body-2", styles.description)}>
            {project.introduction}
          </div>
        </div>

        <div className={styles.overview}>
          <Item
            project={project}
            image={project.images[2]}
            title="Problem"
            content={project.problem}
          />
          <Item
            project={project}
            image={project.images[3]}
            title="Solution"
            content={project.solution}
          />
        </div>
      </div>
    </section>
  );
}
