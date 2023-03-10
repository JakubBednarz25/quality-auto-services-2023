import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button/Button";
import styles from "../styles/Home.module.scss";

import ContactForm from "../components/Form/ContactForm";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <video autoPlay muted loop className={styles.video}>
          <source src="/VE Project 1.mp4" type="video/mp4" />
        </video>
        <div className={styles.shade}>
          <div className={styles.informationSection}>
            <div className={styles.textSection}>
              <h1>Premium & quality recovery truck bodies</h1>
              <p>
                Our company specializes in designing and manufacturing
                high-quality recovery truck bodies that are built to last.
              </p>
            </div>
            <div className={styles.buttons}>
              <Button background={true}>Get a Quote</Button>
              <Button background={false}>Our Services</Button>
            </div>
          </div>
        </div>
      </section>
      <ul className={styles.socialProof}>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path
              id="circle-check-solid"
              d="M0,15A15,15,0,1,1,15,30,15,15,0,0,1,0,15Zm21.785-2.59a1.641,1.641,0,0,0-2.32-2.32l-6.34,6.34-2.59-2.59a1.641,1.641,0,0,0-2.32,2.32l3.75,3.75a1.644,1.644,0,0,0,2.32,0Z"
              fill="#de0024"
            />
          </svg>
          <label>10+ Years Experience</label>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path
              id="circle-check-solid"
              d="M0,15A15,15,0,1,1,15,30,15,15,0,0,1,0,15Zm21.785-2.59a1.641,1.641,0,0,0-2.32-2.32l-6.34,6.34-2.59-2.59a1.641,1.641,0,0,0-2.32,2.32l3.75,3.75a1.644,1.644,0,0,0,2.32,0Z"
              fill="#de0024"
            />
          </svg>
          <label>Top Prices</label>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path
              id="circle-check-solid"
              d="M0,15A15,15,0,1,1,15,30,15,15,0,0,1,0,15Zm21.785-2.59a1.641,1.641,0,0,0-2.32-2.32l-6.34,6.34-2.59-2.59a1.641,1.641,0,0,0-2.32,2.32l3.75,3.75a1.644,1.644,0,0,0,2.32,0Z"
              fill="#de0024"
            />
          </svg>
          <label>High Customer Satisfaction</label>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path
              id="circle-check-solid"
              d="M0,15A15,15,0,1,1,15,30,15,15,0,0,1,0,15Zm21.785-2.59a1.641,1.641,0,0,0-2.32-2.32l-6.34,6.34-2.59-2.59a1.641,1.641,0,0,0-2.32,2.32l3.75,3.75a1.644,1.644,0,0,0,2.32,0Z"
              fill="#de0024"
            />
          </svg>
          <label>Professional</label>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path
              id="circle-check-solid"
              d="M0,15A15,15,0,1,1,15,30,15,15,0,0,1,0,15Zm21.785-2.59a1.641,1.641,0,0,0-2.32-2.32l-6.34,6.34-2.59-2.59a1.641,1.641,0,0,0-2.32,2.32l3.75,3.75a1.644,1.644,0,0,0,2.32,0Z"
              fill="#de0024"
            />
          </svg>
          <label>Flexible Schedule </label>
        </li>
      </ul>
      <section className={styles.section}>
        <h2>What do we do?</h2>
        <div className={styles.customHr}></div>
        <p>
          Recovery trucks are essential vehicles that help transport broken-down
          or damaged vehicles from one place to another. Whether you're in the
          towing business, operate a breakdown service, or need a recovery truck
          for your personal use, we offer a wide selection of quality recovery
          trucks to suit your needs.
        </p>
      </section>
      <section className={styles.section}>
        <h2>Types of Recovery Trucks</h2>
        <div className={styles.customHr}></div>
        <p>
          There are several types of recovery trucks available, each with their
          own unique features and benefits. Our website provides detailed
          information on the different types of recovery trucks, including tilt
          and slide, beaver tail, flatbed, and heavy recovery trucks. We'll help
          you determine which type of truck is best suited for your needs.
        </p>
        <div className={styles.bodiesWrapper}>
          <article className={styles.truckBody}>
            <div className={styles.bodyImageContainer}>
              <Image
                src={"/flat-bed-recovery-truck.jpg"}
                alt="Recovery truck with the beaver tail body"
                fill
                className="image"
              />
            </div>
            <div className={styles.shade}>
              <Button background={false}>
                <Link href="/body/Beaver tail">Beaver tails</Link>
              </Button>
            </div>
          </article>
          <article className={styles.truckBody}>
            <div className={styles.bodyImageContainer}>
              <Image
                src={"/twin-deck-recovery-truck.jpg"}
                alt="Recovery truck with the twin-deck body"
                fill
                className="image"
              />
            </div>
            <div className={styles.shade}>
              <Button background={false}>
                <Link href="/body/Twin deck">Twin deck</Link>
              </Button>
            </div>
          </article>
          <article className={styles.truckBody}>
            <div className={styles.bodyImageContainer}>
              <Image
                src={"/flat-bed-recovery-truck.jpg"}
                alt="Recovery truck with the flat bed body"
                fill
                className="image"
              />
            </div>
            <div className={styles.shade}>
              <Button background={false}><Link href="/body/Flat bed">Flat bed</Link></Button>
            </div>
          </article>
          <article className={styles.truckBody}>
            <div className={styles.bodyImageContainer}>
              <Image
                src={"/tilt_and_slide-recovery-truck.jpg"}
                alt="Recovery truck with the tilt & slide body"
                fill
                className="image"
              />
            </div>
            <div className={styles.shade}>
              <Button background={false}><Link href="/body/Tilt & slide">Tilt & slide</Link></Button>
            </div>
          </article>
        </div>
      </section>
      <section className={styles.section}>
        <h2>Features to Consider</h2>
        <div className={styles.customHr}></div>
        <p>
          When purchasing a recovery truck, there are several important features
          to consider:
        </p>
        <div className={styles.featuresWrapper}>
          <div className={styles.feature}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="77.873"
              height="63.082"
              viewBox="0 0 77.873 63.082"
            >
              <path
                id="truck-ramp-box-solid"
                d="M85.821,0V49.283a13.8,13.8,0,0,1-27.6.333L12.931,61.961a3.945,3.945,0,0,1-2.07-7.614L50.337,43.591V7.885A7.893,7.893,0,0,1,58.222,0ZM77.935,49.283A5.914,5.914,0,1,0,72.021,55.2a5.914,5.914,0,0,0,5.914-5.914ZM9.814,25.59A3.946,3.946,0,0,1,12.6,20.76l5.717-1.528,2.55,9.524a1.976,1.976,0,0,0,2.415,1.392l3.807-1.023a1.976,1.976,0,0,0,1.392-2.415l-2.55-9.524,5.717-1.528a3.946,3.946,0,0,1,4.83,2.784l5.1,19.036a3.946,3.946,0,0,1-2.784,4.83L19.745,47.422a3.946,3.946,0,0,1-4.83-2.784Z"
                transform="translate(-7.947)"
                fill="#fff"
              />
            </svg>
            <label>Payload capacity</label>
          </div>
          <div className={styles.feature}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70.233"
              height="74.505"
              viewBox="0 0 70.233 74.505"
            >
              <path
                id="shield-solid"
                d="M35.116,0a4.775,4.775,0,0,1,1.961.424L64.628,12.115a9.083,9.083,0,0,1,5.6,8.369C70.159,35,64.189,61.556,38.979,73.627a8.937,8.937,0,0,1-7.726,0C6.043,61.556.073,35,0,20.484a9.083,9.083,0,0,1,5.6-8.369L33.17.424A4.658,4.658,0,0,1,35.116,0Z"
                transform="translate(0)"
                fill="#fff"
              />
            </svg>

            <label>Safety features</label>
          </div>{" "}
          <div className={styles.feature}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="77"
              height="77"
              viewBox="0 0 77 77"
            >
              <path
                id="weight-scale-solid"
                d="M19.25,26.469A19.25,19.25,0,1,1,38.5,45.719,19.25,19.25,0,0,1,19.25,26.469ZM58.923,9.625a26.48,26.48,0,0,0-40.846,0H9.625A9.634,9.634,0,0,0,0,19.25V67.375A9.634,9.634,0,0,0,9.625,77h57.75A9.634,9.634,0,0,0,77,67.375V19.25a9.634,9.634,0,0,0-9.625-9.625ZM44.516,33.688a5.967,5.967,0,0,0-1.639-4.121l5.053-11.776A2.405,2.405,0,0,0,43.508,15.9L38.455,27.672a6.016,6.016,0,1,0,6.061,6.016Z"
                fill="#fff"
              />
            </svg>

            <label>Size</label>
          </div>
          <div className={styles.feature}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="77"
              height="67.375"
              viewBox="0 0 77 67.375"
            >
              <path
                id="car-solid"
                d="M20.333,44.843,16.408,56.063H60.592L56.667,44.843a4.816,4.816,0,0,0-4.542-3.218H24.875A4.816,4.816,0,0,0,20.333,44.843ZM5.955,56.784,11.249,41.67A14.441,14.441,0,0,1,24.875,32H52.125a14.441,14.441,0,0,1,13.625,9.67l5.294,15.114A9.643,9.643,0,0,1,77,65.688V94.563a4.807,4.807,0,0,1-4.812,4.813H67.375a4.807,4.807,0,0,1-4.812-4.813V87.344H14.438v7.219a4.807,4.807,0,0,1-4.812,4.813H4.813A4.807,4.807,0,0,1,0,94.563V65.688A9.643,9.643,0,0,1,5.955,56.784ZM19.25,70.5a4.813,4.813,0,1,0-4.812,4.812A4.812,4.812,0,0,0,19.25,70.5Zm43.313,4.812A4.812,4.812,0,1,0,57.75,70.5,4.812,4.812,0,0,0,62.563,75.313Z"
                transform="translate(0 -32)"
                fill="#fff"
              />
            </svg>
            <label>Maneuverability</label>
          </div>
        </div>
        <div className={styles.information}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42.142"
            height="36.138"
            viewBox="0 0 42.142 36.138"
          >
            <path
              id="arrow-right-solid_1_"
              data-name="arrow-right-solid(1)"
              d="M41.26,84.12a3.015,3.015,0,0,0,0-4.261L26.208,64.807a3.013,3.013,0,0,0-4.261,4.261l9.925,9.915H3.01A3.01,3.01,0,1,0,3.01,85H31.862l-9.906,9.915a3.013,3.013,0,0,0,4.261,4.261L41.269,84.129Z"
              transform="translate(0 -63.925)"
              fill="#777"
            />
          </svg>
          <p>
            Our website provides detailed information on these features to help
            you make an informed decision.
          </p>
        </div>
      </section>
      <section className={styles.section}>
        <h2>Send a Quote</h2>
        <div className={styles.customHr}></div>
        <p>
          Please complete the following form if you'd like to send us a quote.
        </p>
        <ContactForm />
        {/* <div className={styles.brandLogos}>
            <Image src={'/car-brands/citroen.png'} alt='logo of car brand citroen' height={117} width={164}/>
            <Image src={'/car-brands/ford.png'} alt='logo of car brand ford' height={76} width={200}/>
            <Image src={'/car-brands/man.png'} alt='logo of car brand man' height={78} width={139}/>
            <Image src={'/car-brands/peugeot.png'} alt='logo of car brand peugeot' height={129} width={125}/>
            <Image src={'/car-brands/vw.png'} alt='logo of car brand volkswagen' height={131} width={129}/>
            <Image src={'/car-brands/fiat.png'} alt='logo of car brand fiat' height={130} width={130}/>
            <Image src={'/car-brands/iveco.png'} alt='logo of car brand iveco' height={50} width={230}/>
            <Image src={'/car-brands/mercedes.png'} alt='logo of car brand mercedes' height={130} width={130}/>
            <Image src={'/car-brands/clio.png'} alt='logo of car brand clio' height={138} width={111}/>
        </div> */}
      </section>
    </div>
  );
};

export default Home;
