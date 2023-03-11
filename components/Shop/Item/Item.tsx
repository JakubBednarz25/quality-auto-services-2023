import styles from "./Item.module.scss";
import Image from "next/image";

import type { ItemType } from "../../../utils/items";
import { FunctionComponent } from "react";
import Link from "next/link";

const Item: FunctionComponent<ItemType> = ({ ...itemInfo }: ItemType) => {
  console.log(itemInfo);
  return (
    <Link href={`/item/${itemInfo.name}`}>
      <article className={styles.item}>
        <div className={styles.imageContainer}>
          <Image
            src={itemInfo.imageUrl}
            alt={`image of ${itemInfo.name}`}
            height={150}
            width={200}
          />
        </div>
        <p>{itemInfo.name}</p>
        <span>{`£${(itemInfo.price / 100).toLocaleString()}.00`}</span>
      </article>
    </Link>
  );
};

export default Item;
