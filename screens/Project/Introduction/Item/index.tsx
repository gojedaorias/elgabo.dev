import React from 'react';
import styles from './item.module.css';
import cn from 'classnames';

interface ContentItem {
  title: string;
  description: string;
}

interface Project {
  title: string;
}

interface ItemProps {
  title: string;
  project: Project;
  image: string;
  content: ContentItem[];
}

export default function Item({ title, project, image, content }: ItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <img className={styles.image} src={image} alt={project.title} />
      </div>

      <div className={cn("h4", styles.title)}>{title}</div>
      <div className={styles.items}>
        {content.map((item: ContentItem, index: number) => (
          <div key={index} className={styles.item}>
            <div className={cn("body-2-semibold", styles.text)}>
              {item.title}
            </div>
            <div className={cn("caption", styles.subtitle)}>
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
