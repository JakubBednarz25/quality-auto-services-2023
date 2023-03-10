import Heading from "../components/Heading/Heading";
import styles from "../styles/Financing.module.scss";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Financing = () => {
  return (
    <>
      <Head>
        <title>Financing | Quality Auto Services</title>
      </Head>
      <div className={styles.container}>
        <Heading heading={"Financing"} />
        <div className={styles.wrapper}>
          <section className={styles.introduction}>
            <div className={styles.text}>
              <p>
                Welcome to the Financing page for recovery truck bodies at
                Quality Auto Services. Here, we aim to make it easy and
                accessible for our customers to finance their recovery truck
                body purchases with the help of our trusted partner, Access
                Business Finance.
              </p>
              <p>
                We understand that purchasing a recovery truck body is a
                significant investment, and not everyone has the capital upfront
                to make the purchase outright. That's why we've partnered with
                Access Business Finance to provide flexible and affordable
                financing options for our customers.
              </p>
            </div>
            <Image
              src={"/access-square.jpeg"}
              alt="Image of the company Access Business Finance"
              width={160}
              height={160}
            />
          </section>
          <section className={styles.access}>
            <h2>What is Access Business Finance?</h2>
            <p>
              Access Business Finance offer quick, effective, and simple finance
              solutions that support your business's growth. Specialising in the
              vehicle transport markets, Access Business Finance can help you
              secure the right finance product the first time.
            </p>
            <p>
              Partnered with Quality Auto Services, Access can have your finance
              approved within as little as 15 minutes and offer a 121 approach
              the whole way through the process.
            </p>
          </section>
          <section className={styles.icons}>
            <div className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="101.196"
                height="101.196"
                viewBox="0 0 101.196 101.196"
              >
                <path
                  id="Path_14"
                  data-name="Path 14"
                  d="M50.6,0A50.6,50.6,0,1,1,0,50.6,50.6,50.6,0,0,1,50.6,0ZM45.854,23.718V50.6a4.764,4.764,0,0,0,2.115,3.953L66.943,67.2A4.747,4.747,0,0,0,72.2,59.294L55.341,48.068V23.718a4.744,4.744,0,0,0-9.487,0Z"
                  fill="rgba(222,0,35,0.39)"
                />
              </svg>
              <label>Decisions within 24 hrs</label>
            </div>
            <div className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="126.519"
                height="70.273"
                viewBox="0 0 126.519 70.273"
              >
                <path
                  id="Path_15"
                  data-name="Path 15"
                  d="M84.276,110.056a7.028,7.028,0,1,1,0-14.056h35.139a7.02,7.02,0,0,1,7.028,7.028v35.139a7.028,7.028,0,0,1-14.056,0V120l-37.2,37.182a7.039,7.039,0,0,1-9.949,0L42.109,134.06,11.933,164.215a7.035,7.035,0,1,1-9.949-9.949l35.139-35.139a7.039,7.039,0,0,1,9.949,0L70.22,142.274l32.219-32.218Z"
                  transform="translate(0.075 -96)"
                  fill="rgba(222,0,35,0.39)"
                />
              </svg>
              <label>Market leading rates</label>
            </div>
            <div className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="88.546"
                height="101.196"
                viewBox="0 0 88.546 101.196"
              >
                <path
                  id="Path_16"
                  data-name="Path 16"
                  d="M25.3,0a6.318,6.318,0,0,1,6.325,6.325v6.325h25.3V6.325a6.325,6.325,0,1,1,12.649,0v6.325h9.487a9.49,9.49,0,0,1,9.487,9.487v9.487H0V22.137a9.49,9.49,0,0,1,9.487-9.487h9.487V6.325A6.318,6.318,0,0,1,25.3,0ZM0,37.948H88.546v53.76a9.49,9.49,0,0,1-9.487,9.487H9.487A9.49,9.49,0,0,1,0,91.709ZM12.649,53.76v6.325a3.172,3.172,0,0,0,3.162,3.162h6.325A3.172,3.172,0,0,0,25.3,60.085V53.76A3.172,3.172,0,0,0,22.137,50.6H15.812A3.172,3.172,0,0,0,12.649,53.76Zm25.3,0v6.325a3.172,3.172,0,0,0,3.162,3.162h6.325A3.172,3.172,0,0,0,50.6,60.085V53.76A3.172,3.172,0,0,0,47.435,50.6H41.111A3.172,3.172,0,0,0,37.948,53.76ZM66.41,50.6a3.172,3.172,0,0,0-3.162,3.162v6.325a3.172,3.172,0,0,0,3.162,3.162h6.325A3.172,3.172,0,0,0,75.9,60.085V53.76A3.172,3.172,0,0,0,72.734,50.6ZM12.649,79.059v6.325a3.172,3.172,0,0,0,3.162,3.162h6.325A3.172,3.172,0,0,0,25.3,85.384V79.059A3.172,3.172,0,0,0,22.137,75.9H15.812A3.172,3.172,0,0,0,12.649,79.059ZM41.111,75.9a3.172,3.172,0,0,0-3.162,3.162v6.325a3.172,3.172,0,0,0,3.162,3.162h6.325A3.172,3.172,0,0,0,50.6,85.384V79.059A3.172,3.172,0,0,0,47.435,75.9Zm22.137,3.162v6.325a3.172,3.172,0,0,0,3.162,3.162h6.325A3.172,3.172,0,0,0,75.9,85.384V79.059A3.172,3.172,0,0,0,72.734,75.9H66.41A3.172,3.172,0,0,0,63.247,79.059Z"
                  fill="rgba(222,0,35,0.39)"
                />
              </svg>
              <label>Terms up to 7 yrs</label>
            </div>{" "}
            <div className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="93.444"
                height="93.465"
                viewBox="0 0 93.444 93.465"
              >
                <path
                  id="Path_17"
                  data-name="Path 17"
                  d="M103.392,43.328a6.68,6.68,0,1,0-9.448-9.448L65.31,62.536,53.339,50.565a6.68,6.68,0,1,0-9.448,9.448L60.576,76.7a6.684,6.684,0,0,0,9.448,0l33.369-33.369Zm20.021,26.7a6.68,6.68,0,1,0-9.448-9.448L65.31,109.253,43.328,87.292a6.68,6.68,0,1,0-9.448,9.448l26.7,26.7a6.684,6.684,0,0,0,9.448,0l53.391-53.391Z"
                  transform="translate(-31.925 -31.925)"
                  fill="rgba(222,0,35,0.39)"
                />
              </svg>

              <label>New start finance available</label>
            </div>
            <div className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="83.471"
                height="111.294"
                viewBox="0 0 83.471 111.294"
              >
                <path
                  id="Path_18"
                  data-name="Path 18"
                  d="M13.912,0A13.925,13.925,0,0,0,0,13.912V97.382a13.925,13.925,0,0,0,13.912,13.912H69.559A13.925,13.925,0,0,0,83.471,97.382v-62.6H55.647a6.948,6.948,0,0,1-6.956-6.956V0ZM55.647,0V27.824H83.471ZM17.39,13.912H31.3a3.478,3.478,0,1,1,0,6.956H17.39a3.478,3.478,0,1,1,0-6.956Zm0,13.912H31.3a3.478,3.478,0,1,1,0,6.956H17.39a3.478,3.478,0,0,1,0-6.956Zm3.478,20.868H62.6a6.948,6.948,0,0,1,6.956,6.956V69.559A6.948,6.948,0,0,1,62.6,76.515H20.868a6.948,6.948,0,0,1-6.956-6.956V55.647A6.948,6.948,0,0,1,20.868,48.691Zm0,6.956V69.559H62.6V55.647Zm31.3,34.779H66.081a3.478,3.478,0,1,1,0,6.956H52.169a3.478,3.478,0,1,1,0-6.956Z"
                  fill="rgba(222,0,35,0.39)"
                />
              </svg>

              <label>VAT deferrals available</label>
            </div>
          </section>
          <section className={styles.contact}>
            <h2>Contact Access Business Finance</h2>
            <div className={styles.contactWrapper}>
              <ul>
                <li>
                  <h3>Website</h3>
                  <p>
                    <Link href="https://access-bf.com/request-a-call-back/">
                      https://access-bf.com/request-a-call-back/
                    </Link>
                  </p>
                </li>
                <li>
                  <h3>Telephone</h3>
                  <p>01234 413349</p>
                </li>
                <li>
                  <h3>E-mail</h3>
                  <p>info@access-bf.co.uk</p>
                </li>
              </ul>
              <Image
                src={"/access-wide.jpg"}
                alt="Logo of company Access Business Finance"
                width={200}
                height={60}
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Financing;
