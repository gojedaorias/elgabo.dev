import React from 'react';
import styles from './background-item.module.css';
import cn from 'classnames';

interface BackgroundItemProps {
  title: string;
  text: string;
  years: string;
}

export default function BackgroundItem({ title, text, years }: BackgroundItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <div className={cn("body-2-semibold", styles.title)}>{title}</div>
        <div className={cn("caption", styles.text)}>{text}</div>
      </div>

      <div className={cn("caption", styles.years)}>{years}</div>
    </div>
  );
}
