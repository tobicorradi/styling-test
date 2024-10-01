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
        <FirmCard variant="border" />
        <FirmCard variant="border" />
        <FirmCard variant="border" />
      </div>
    </section>
  );
};
