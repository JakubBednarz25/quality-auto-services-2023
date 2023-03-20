import Heading from "../../components/Heading/Heading";
import styles from "../../styles/ItemPage.module.scss";
import Image from "next/image";
import Button from "../../components/Button/Button";
import ContactForm from "../../components/Form/ContactForm";
import Head from "next/head";

import type { category, ItemType } from "../../utils/items";
import { items } from "../../utils/items";
import { useContext, useEffect, useState } from "react";
import { CartContext, ICart } from "../../utils/CartContext";
import ItemLabel from "../../components/Shop/ItemLabel/ItemLabel";
import Notification from "../../components/Notification/Notification";
import Link from "next/link";

export const getServerSideProps = (ctx) => {
  const { name } = ctx.params;
  console.log(ctx.params);
  const item = items.find((t) => t.slug === name);
  return {
    props: { item },
  };
};

const ItemPage = ({ item }: ItemType) => {
  const { cart, setCart, setItemAmount } = useContext(CartContext) as ICart;
  const [notifVisible, setNotifVisible] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    setNotifVisible(false);
  }, [quantity]);
  return (
    <>
      <Head>
        <title>{`${item.name} | Quality Auto Services`}</title>
      </Head>
      <div className={styles.container}>
        <Heading heading={`${item.name}`} />
        <div className={styles.wrapper}>
          <section className={styles.imageContainer}>
            <Image
              src={item.imageUrl}
              alt={`image of ${item.name}`}
              width={300}
              height={300}
            />
          </section>
          <section className={styles.description}>
            <div className={styles.part}>
              <h1>{item.name}</h1>
              <ItemLabel type={item.category} />
            </div>
            <div className={styles.part}>
              <span className={styles.price}>{`£${(item.price / 100).toFixed(
                2
              )}`}</span>
              <span className={styles.excludingTaxPrice}>
                <p>Excl. tax</p>
                {`£${(item.price / 120).toFixed(2)}`}
              </span>
            </div>
            {notifVisible && (
              <Notification type={"success"}>
                {`${quantity} item(s) added.`}
                <Link href="/cart">View Cart</Link>
              </Notification>
            )}
            <div className={styles.addToCart}>
              <div className={styles.select}>
                <select
                  value={quantity}
                  onChange={(e) => {
                    setQuantity(parseInt(e.target.value));
                  }}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                <Button
                  background={true}
                  action={() => {
                    setItemAmount(item.id, quantity);
                    setNotifVisible(true);
                  }}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ItemPage;
