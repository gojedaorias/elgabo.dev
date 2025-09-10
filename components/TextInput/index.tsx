import cn from "classnames";
import styles from "./text-input.module.css";

interface TextInputProps {
  className?: string;
  placeholder?: string;
}

export const TextInput = ({
  className,
  placeholder = "Enter your email",
}: TextInputProps) => {
  return (
    <input
      className={cn("caption", styles.input, className)}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
