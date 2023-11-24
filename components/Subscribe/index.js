import React from "react";
import styles from "./subscribe.module.css";
import cn from "classnames";
import TextInput from "../TextInput";
import { ArrowRight } from "../Icons";

export default function Subscribe({ className }) {
  return (
    <div className={cn(className, styles.container)}>
      <div className={cn(className, styles.content)}>
        <TextInput />

        <button className={cn("button", styles.button)}>
          <ArrowRight />
        </button>
      </div>

      <p className={cn("caption", styles.placeholder)}>
        Subscribe to the newsletter, no spam!
      </p>
    </div>
  );
}
