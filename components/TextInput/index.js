import React from "react";
import styles from "./text-input.module.css";
import cn from "classnames";

export default function TextInput(props) {
  return (
    <input
      className={cn("caption", styles.input)}
      placeholder="Enter your email"
    />
  );
}
