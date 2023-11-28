import React from "react";
import styles from "./background.module.css";
import cn from "classnames";
import { BackgroundItem } from "@/components/Cards";
import { jobs, schools } from "@/mocks/background";

export default function Background() {
  return (
    <section className={cn("section")} id="background">
      <div className={styles.container}>
        <div className={styles.experience_container}>
          {jobs.map((job, index) => (
            <>
              <div className={cn("body-1-bold")} key={index}>
                {job.title}
              </div>

              <div className={styles.items}>
                {job.items.map((job, index) => (
                  <BackgroundItem key={index} {...job} />
                ))}
              </div>
            </>
          ))}
        </div>

        <div className={styles.education_container}>
          {schools.map((school, index) => (
            <>
              <div className={cn("body-1-bold")} key={index}>
                {school.title}
              </div>

              <div className={styles.items}>
                {school.items.map((school, index) => (
                  <BackgroundItem key={index} {...school} />
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
