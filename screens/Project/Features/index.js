import React from "react";
import styles from "./features.module.css";
import cn from "classnames";
import Item from "./Item";

export default function Features({ project }) {
  return (
    <section className={cn("section", styles.section)}>
      <div className={styles.container}>
        <div className={styles.items}>
          <Item
            project={project}
            image={project.images[3]}
            title="Benefits"
            content={project.benefits}
          />
          <Item
            project={project}
            image={project.images[1]}
            title="How it works"
            content={project.introductions}
          />
        </div>

        <div className={styles.title_container}>
          <div className={cn("body-2", styles.title)}>
            Join the EcoTrack community today! Download the app and start your
            journey towards a more sustainable lifestyle. Together, we can make
            a difference in the fight against climate change.
          </div>
          <button className={cn("button")}>Vist {project.title}</button>
        </div>
      </div>
    </section>
  );
}
