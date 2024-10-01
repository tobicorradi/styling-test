import { Button } from "../Button";
import styles from "./FirmCard.module.scss";

interface FirmCardProps {
  variant?: "default" | "border";
}

export const FirmCard = ({ variant = "default" }: FirmCardProps) => {
  const cardClass =
    variant === "default" ? styles.defaultCard : styles.borderCard;

  return (
    <div className={cardClass}>
      <Button />
    </div>
  );
};
