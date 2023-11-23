import React from "react";
import styles from "./tool.module.css";
import cn from "classnames";

export default function Tool({ icon, title, text }) {
  return (
    <div className={styles.container}>
      <div className={styles.icon_container}>{icon}</div>
      <div className={styles.title_container}>
        <div className={cn("body-2-semibold", styles.title)}>{title}</div>
        <p className={cn("caption", styles.text)}>{text}</p>
      </div>
    </div>
  );
}
