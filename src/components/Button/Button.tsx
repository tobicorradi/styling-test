import classNames from "classnames";
import { SearchIcon } from "../SearchIcon";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "icon";
  text: string;
}

export const Button = ({
  variant = "default",
  text,
  disabled,
  ...rest
}: ButtonProps) => {
  const isIconVariant = variant === "icon";

  const buttonClass = classNames(styles.defaultButton, {
    [styles.iconButton]: variant === "icon",
    [styles.disabled]: disabled,
  });

  return (
    <button
      {...rest}
      disabled={disabled}
      className={buttonClass}
      aria-disabled={disabled}
    >
      {isIconVariant && <SearchIcon className={styles.icon} />}
      <p className={styles.text}>{text}</p>
    </button>
  );
};
