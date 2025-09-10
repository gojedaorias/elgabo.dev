import { BackgroundItem } from "@/components/Cards";
import { jobs, schools } from "@/mocks/background";
import cn from "classnames";
import React from "react";
import styles from "./background.module.css";

export const Background = () => {
  return (
    <section className={cn("section")} id="background">
      <div className={styles.container}>
        <div className={styles.experience_container}>
          {jobs.map((job) => (
            <React.Fragment key={crypto.randomUUID()}>
              <div className={cn("body-1-bold")}>{job.title}</div>

              <div className={styles.items}>
                {job.items.map((job) => (
                  <BackgroundItem key={crypto.randomUUID()} {...job} />
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>

        <div className={styles.education_container}>
          {schools.map((school) => (
            <React.Fragment key={crypto.randomUUID()}>
              <div className={cn("body-1-bold")}>{school.title}</div>

              <div className={styles.items}>
                {school.items.map((school) => (
                  <BackgroundItem key={crypto.randomUUID()} {...school} />
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Background;
