import classNames from "classnames";
import styles from "./FirmCard.module.scss";

interface FirmCardProps {
  variant?: "default" | "border";
  children: React.ReactNode;
  align?: "start" | "center" | "end";
}

export const FirmCard = ({
  variant = "default",
  children,
  align = "start",
}: FirmCardProps) => {
  const cardClass = classNames({
    [styles.defaultCard]: variant === "default",
    [styles.borderCard]: variant === "border",
    [styles[`align-${align}`]]: align,
  });

  return <div className={cardClass}>{children}</div>;
};
