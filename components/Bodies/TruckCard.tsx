import { FunctionComponent } from "react";
import Button from "../Button/Button";
import styles from "./TruckCard.module.scss";
import Image from "next/image";
import Link from "next/link";

type TruckCardPropsType = {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  buttonText: string;
};

const TruckCard: FunctionComponent<TruckCardPropsType> = ({
  name,
  description,
  image,
  imageAlt,
  buttonText,
}: TruckCardPropsType) => {
  return (
    <article className={styles.truck}>
      <div className={styles.information}>
        <h2>{name}</h2>
        <p>{description}</p>
        <Button background={false}>
          <Link href={`/body/${name}`}>{buttonText}</Link>
        </Button>
      </div>
      <div className={styles.imageContainer}>
        <Image src={image} className="image" alt={imageAlt} fill />
      </div>
    </article>
  );
};

export default TruckCard;
