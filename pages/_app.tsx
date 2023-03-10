import "../styles/globals.scss";
import type { AppProps } from "next/app";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
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
      <div className="page">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
