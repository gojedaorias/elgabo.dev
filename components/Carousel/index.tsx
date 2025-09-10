"use client";

import cn from "classnames";
import React from "react";
import styles from "./carousel.module.css";

interface CarouselProps {
  images: string[];
  interval?: number;
}

export const Carousel = ({ images, interval = 2000 }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={styles.container}>
      {images.map((image, index) => (
        <img
          key={crypto.randomUUID()}
          src={image}
          alt={`Slide ${index}`}
          className={cn({ [styles.active]: index === currentIndex })}
        />
      ))}

      <div className={styles.dots}>
        {images.map((_, index) => (
          <button
            key={crypto.randomUUID()}
            type="button"
            className={cn(styles.dot, {
              [styles.active]: index === currentIndex,
            })}
            onClick={() => setCurrentIndex(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setCurrentIndex(index);
              }
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
