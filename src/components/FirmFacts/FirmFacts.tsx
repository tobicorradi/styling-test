import { FirmCard } from "../FirmCard";

import styles from "./FirmFacts.module.scss";

export const FirmFacts = () => {
  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        <FirmCard />
        <FirmCard />
        <FirmCard />
        <FirmCard />
        <FirmCard />
        <FirmCard />
        <FirmCard />
      </div>
    </section>
  );
};
