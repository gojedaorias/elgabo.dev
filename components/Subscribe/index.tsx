import cn from "classnames";
import { ArrowRight } from "../Icons";
import TextInput from "../TextInput";
import styles from "./subscribe.module.css";

interface SubscribeProps {
  className?: string;
}

export const Subscribe = ({ className }: SubscribeProps) => {
  return (
    <div className={cn(className, styles.container)}>
      <div className={styles.content}>
        <TextInput />

        <button className={cn("", styles.button)}>
          <ArrowRight />
        </button>
      </div>

      <p className={cn("caption", styles.placeholder)}>
        Stay updated! No spam, only the good stuff.
      </p>
    </div>
  );
};

export default Subscribe;
