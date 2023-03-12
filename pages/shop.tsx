import { useEffect, useState } from "react";
import Heading from "../components/Heading/Heading";
import styles from "../styles/Shop.module.scss";

import type { category, ItemType } from "../utils/items";
import { items } from "../utils/items";

import Item from "../components/Shop/Item/Item";
import Head from "next/head";

const Shop = () => {
  const [category, setCategory] = useState<category>("LED Lights");
  const [displayedItems, setDisplayedItems] = useState<ItemType[]>([]);
  useEffect(() => {
    setDisplayedItems(items.filter((item) => item.category === category));
  }, [category]);
  return (
    <>
      <Head>
        <title>Shop | Quality Auto Services</title>
      </Head>
      <div className={styles.container}>
        <Heading heading={"Shop"} />
        <div className={styles.wrapper}>
          <div className={styles.filters}>
            <h2>Filter by</h2>
            <div className={styles.inputContainer}>
              <label>Category</label>
              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value as typeof category);
                }}
              >
                <option value="LED Lights">LED Lights</option>
                <option value="Air suspensions">Air Suspensions</option>
                <option value="Winches">Winches</option>
              </select>
            </div>
          </div>
          <div className={styles.items}>
            {displayedItems.map((displayedItem) => (
              <Item key={displayedItem.id} {...displayedItem} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
