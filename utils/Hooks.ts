import { useEffect, useState } from "react";

import type { ItemType } from "./items";

import { items } from "./items";

type CartItemType = {
  item: ItemType;
  amount: number;
};

const useCart = () => {
  const [cart, setCart] = useState<CartItemType[]>([]);

  const setItemAmount = (itemId: number, amount: number) => {
    let cartCopy = [...cart];
    let itemExistsInCart = cartCopy.find((i) => i.item.id === itemId);
    if (itemExistsInCart) {
      if (amount === 0) {
        //Remove from cart
        let newCart = cart.filter((i) => i.item.id !== itemId);
        setCart(newCart);
        localStorage.setItem("newCart", JSON.stringify(newCart));
      } else {
        itemExistsInCart.amount = amount;
        setCart(cartCopy);
        localStorage.setItem("newCart", JSON.stringify(cartCopy));
      }
    } else {
      let item = items.find((i) => i.id === itemId) as ItemType;
      let newCart = [
        ...cart,
        {
          item,
          amount,
        },
      ];
      setCart(newCart);
      localStorage.setItem("newCart", JSON.stringify(newCart));
    }
  };

  useEffect(() => {
    setCart(
      typeof window !== "undefined" && localStorage.getItem("newCart") !== null
        ? JSON.parse(localStorage.getItem("newCart") as string)
        : []
    );
  }, []);

  // useEffect(() => {
  //   if (cart.length !== 0) {
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //   }
  // }, [cart]);

  return { cart, setCart, setItemAmount };
};

export { useCart };
export type { CartItemType };
