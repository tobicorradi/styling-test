import styles from "./FirmCard.module.scss";

interface FirmCardProps {
  variant?: "default" | "border";
  children: React.ReactNode;
}

export const FirmCard = ({ variant = "default", children }: FirmCardProps) => {
  const cardClass =
    variant === "default" ? styles.defaultCard : styles.borderCard;

  return <div className={cardClass}>{children}</div>;
};
