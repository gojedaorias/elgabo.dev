import React from 'react';
import styles from './styles.module.css';
import cn from 'classnames';

export default function Section() {
  return (
    <section className={cn("section", styles.section)}>
      <div className={styles.container}>
        <div className={styles.images}>
          <div className={styles.inner_images}>
            <div className={styles.image_container}>
              <img
                src="/images/about/1.jpg"
                className={styles.image}
                alt="Lapse-1"
              />
            </div>

            <div className={styles.image_container}>
              <img
                src="/images/about/2.jpg"
                className={styles.image}
                alt="Lapse-1"
              />
            </div>
          </div>

          <div className={styles.image_container}>
            <img
              src="/images/about/3.jpg"
              className={styles.image}
              alt="Lapse-1"
            />
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.title_container}>
            <span className={cn("hairline-2", styles.text)}>What I do</span>
            <h1 className={cn("h2", styles.title)}>A little about me.</h1>
          </div>

          <div>
            <div className={cn("caption", styles.subtitle)}>
              I specialize in Next.js 13 and React Native with Expo, I develop
              dynamic web applications and mobile apps that blend functionality
              with impactful design. My expertise in modern JavaScript
              frameworks enables me to deliver user-centric, responsive
              solutions.
            </div>

            <a className={cn("button")} href="#background">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
