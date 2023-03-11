import "../styles/globals.scss";
import type { AppProps } from "next/app";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import Head from "next/head";

import { CartContext } from "../utils/CartContext";
import { useCart } from "../utils/Hooks";
import { useContext, useMemo } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const { cart, setCart, setItemAmount } = useCart();
  const providerCart = useMemo(() => {
    return { cart, setCart, setItemAmount };
  }, [cart, setCart]);
  return (
    <>
      <Head>
        <meta name="keywords" />
        <meta
          name="description"
          content="Quality Auto Services provides reliable and versatile recovery truck bodies for your business. Our high-quality beaver tail, twin-deck, tilt & slide, and flat-bed bodies are built to withstand tough conditions, with customizable features to meet your specific needs. Contact us for exceptional customer service and competitive pricing."
        />
        <meta
          property="og:description"
          content="Quality Auto Services provides reliable and versatile recovery truck bodies for your business. Our high-quality beaver tail, twin-deck, tilt & slide, and flat-bed bodies are built to withstand tough conditions, with customizable features to meet your specific needs. Contact us for exceptional customer service and competitive pricing."
        />
        <meta property="og:image" content="/logo.png" />
      </Head>
      <CartContext.Provider value={providerCart}>
        <div className="page">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </CartContext.Provider>
    </>
  );
}

export default MyApp;
