import React from 'react';
import styles from './project.module.css';
import cn from 'classnames';
import { RightUp } from '@/components/Icons';
import Link from 'next/link';

interface ProjectProps {
  project: {
    title: string;
    images: string[];
    description: string;
  };
}

export default function Project({ project }: ProjectProps) {
  return (
    <Link href={`/project/${project.title}`}>
      <div className={styles.container}>
        <div className={styles.image_container}>
          <img className={styles.image} src={project.images[0]} alt="project" />
        </div>

        <div className={styles.overlay}>
          <div className={styles.icon}>
            <RightUp />
          </div>

          <div className={styles.content}>
            <div className={cn("body-2-semibold", styles.title)}>
              {project.title}
            </div>

            <p className={cn("caption", styles.description)}>
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
