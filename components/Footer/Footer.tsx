import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h2>Address</h2>
          <ul>
            <li>Quality Auto Services Ltd</li>
            <li>Boston Trade Park</li>
            <li>Unit C10</li>
            <li>Norfolk Street</li>
            <li>Boston</li>
            <li>Lincolnshire</li>
            <li>PE21 9HG</li>
            <li>United Kingdom</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h2>Contact</h2>
          <ul>
            <li>01895434256</li>
            <li>07935210167</li>
            <li>info@qualityautoservices.co.uk</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h2>Trucks</h2>
          <ul>
            <li><Link href="/body/beaver-tail">Beaver tails</Link></li>
            <li><Link href="/body/twin-deck">Twin decks</Link></li>
            <li><Link href="/body/flat-bed">Flat beds</Link></li>
            <li><Link href="/body/Tilt & slide">tilt-and-slide</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.social}>
        <Image
          src={"/logo_black.png"}
          alt="logo of quality auto services"
          width={250}
          height={90}
        />
        <div className={styles.links}>
          <ul className={styles.siteLinks}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/bodies">Bodies</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/financing">Financing</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/terms">Terms & Conditions</Link>
            </li>
          </ul>
          <ul className={styles.socialMediaLinks}>
            <li>
              <a
                href="https://www.instagram.com/qualityautoservicesiver/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                >
                  <path
                    id="instagram-brands"
                    d="M24.931,44.006A12.819,12.819,0,1,0,37.747,56.825,12.8,12.8,0,0,0,24.931,44.006Zm0,21.154a8.334,8.334,0,1,1,8.332-8.334A8.348,8.348,0,0,1,24.931,65.159Zm16.33-21.678a2.989,2.989,0,1,1-2.989-2.99A2.983,2.983,0,0,1,41.261,43.481Zm8.489,3.035c-.19-4.005-1.1-7.553-4.038-10.476S39.242,32.2,35.237,32c-4.127-.234-16.5-.234-20.625,0-3.993.19-7.54,1.1-10.474,4.028S.3,42.5.1,46.5c-.234,4.128-.234,16.5,0,20.629.19,4.005,1.1,7.553,4.038,10.476s6.47,3.838,10.474,4.039c4.127.234,16.5.234,20.625,0,4-.19,7.552-1.1,10.474-4.039s3.837-6.471,4.038-10.476c.234-4.128.234-16.49,0-20.618ZM44.417,71.563a8.437,8.437,0,0,1-4.752,4.753c-3.291,1.305-11.1,1-14.735,1s-11.456.29-14.735-1a8.437,8.437,0,0,1-4.752-4.753c-1.305-3.291-1-11.1-1-14.738s-.29-11.458,1-14.738A8.437,8.437,0,0,1,10.2,37.334c3.291-1.305,11.1-1,14.735-1s11.456-.29,14.735,1a8.437,8.437,0,0,1,4.752,4.753c1.305,3.291,1,11.1,1,14.738S45.723,68.283,44.417,71.563Z"
                    transform="translate(0.075 -31.825)"
                    fill="#df0023"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/qualityautoservicesboston"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                >
                  <path
                    id="facebook-brands"
                    d="M58,33.152A25,25,0,1,0,29.094,58V40.423H22.743V33.152h6.351V27.611c0-6.3,3.73-9.785,9.443-9.785a38.249,38.249,0,0,1,5.6.491V24.5H40.98c-3.1,0-4.074,1.939-4.074,3.928v4.721H43.84l-1.109,7.271H36.906V58A25.115,25.115,0,0,0,58,33.152Z"
                    transform="translate(-8 -8)"
                    fill="#df0023"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@qualityautoservicesltd9014"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="71.111"
                  height="50"
                  viewBox="0 0 71.111 50"
                >
                  <path
                    id="youtube-brands"
                    d="M84.558,71.823A8.935,8.935,0,0,0,78.271,65.5C72.726,64,50.489,64,50.489,64s-22.237,0-27.783,1.5a8.935,8.935,0,0,0-6.287,6.328c-1.486,5.582-1.486,17.227-1.486,17.227s0,11.646,1.486,17.227a8.8,8.8,0,0,0,6.287,6.227c5.546,1.5,27.783,1.5,27.783,1.5s22.237,0,27.783-1.5a8.8,8.8,0,0,0,6.287-6.227c1.486-5.582,1.486-17.227,1.486-17.227S86.044,77.4,84.558,71.823Zm-41.342,27.8V78.477L61.8,89.051Z"
                    transform="translate(-14.933 -64)"
                    fill="#df0023"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className={styles.copyright}>
        <b>© 2023 Quality Auto Services Ltd</b>
        <a>Terms & conditions</a>
      </div>
    </footer>
  );
};

export default Footer;
