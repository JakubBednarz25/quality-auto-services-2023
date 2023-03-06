import { FunctionComponent } from "react";
import styles from "./Heading.module.scss";

type HeadingPropsType = {
  heading: string;
};

const Heading: FunctionComponent<HeadingPropsType> = ({
  heading,
}: HeadingPropsType) => {
  return (
    <div className={styles.headingContainer}>
      <div className={styles.shade}>
        <h1>{heading}</h1>
      </div>
    </div>
  );
};

export default Heading;
