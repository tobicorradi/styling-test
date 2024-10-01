import { Button } from "../Button";
import { FirmCard } from "../FirmCard";

import styles from "./FirmFacts.module.scss";

export const FirmFacts = () => {
  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        <FirmCard>
          <Button
            variant="icon"
            text="This is a two line button that termintes with dynamic truncate dots"
          />
        </FirmCard>
        <FirmCard>
          <Button
            variant="icon"
            text="This is a two line button that termintes with dynamic truncate dots"
          />
        </FirmCard>
        <FirmCard>
          <Button text="This is a one line button" />
        </FirmCard>
        <FirmCard>
          <Button
            variant="icon"
            text="This is a two line button that termintes with dynamic truncate dots"
          />
        </FirmCard>
        <FirmCard variant="border">
          <Button
            variant="icon"
            text="This is a two line button that termintes with dynamic truncate dots"
          />
        </FirmCard>
        <FirmCard variant="border">
          <Button
            disabled
            variant="icon"
            text="This is a two line button that termintes with dynamic truncate dots"
          />
        </FirmCard>
        <FirmCard variant="border">
          <Button
            variant="icon"
            text="This is a two line button that termintes with dynamic truncate dots"
          />
        </FirmCard>
      </div>
    </section>
  );
};
