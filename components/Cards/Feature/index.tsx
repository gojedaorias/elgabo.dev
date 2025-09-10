import cn from "classnames";
import React from "react";
import styles from "./feature.module.css";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon_container}>
        <div className={styles.icon}>{icon}</div>
      </div>

      <h3 className={cn("body-2-semibold", styles.title)}>{title}</h3>
      <p className={cn("caption", styles.description)}>{description}</p>
    </div>
  );
};

export default Feature;
