import React from 'react';
import styles from './fact.module.css';
import cn from 'classnames';

interface FactProps {
  number: string | number;
  description: string;
}

export default function Fact({ number, description }: FactProps) {
  return (
    <div className={styles.container}>
      <div className={cn("h4", styles.number)}>{number}</div>
      <div className={cn("caption", styles.description)}>{description}</div>
    </div>
  );
}
