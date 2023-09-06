import Heading from "../components/Heading/Heading";
import styles from "../styles/Financing.module.scss";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Financing = () => {
  return (
    <>
      <Head>
        <title>Page Not Found | Quality Auto Services</title>
      </Head>
      <div className={styles.container}>
        <Heading heading={"Page Not Found"} />
        <p className={styles.pageErrorMessage}>The page you have requested does not exist. Please try again from <Link href="/">Here</Link></p>
      </div>
    </>
  );
};

export default Financing;
