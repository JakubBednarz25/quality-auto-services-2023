import "../styles/globals.scss";
import type { AppProps } from "next/app";

import Header from "../components/Header/Header";
import Footer from '../components/Footer/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="page">
      <Header />
      <Component {...pageProps} />
      <Footer />
      </div>
    </>
  );
}

export default MyApp;
