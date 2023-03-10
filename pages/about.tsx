import Heading from "../components/Heading/Heading";
import styles from "../styles/About.module.scss";
import Image from "next/image";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About | Quality Auto Services</title>
      </Head>
      <div className={styles.container}>
        <Heading heading={"About"} />
        <div className={styles.wrapper}>
          <p>
            Quality Auto Services is a trusted and reputable company that has
            been in the recovery truck body building business for 10+ years.
            Founded in 2012, our team of experienced mechanics and technicians
            have been providing top-quality auto repair and maintenance services
            to customers throughout the region. We take pride in our work and
            are committed to ensuring that every customer receives the best
            possible service and care.
          </p>
          <p>
            At Quality Auto Services, we understand how important it is to have
            a reliable vehicle. That's why we go above and beyond to provide a
            wide range of services to help keep your vehicle running smoothly
            and efficiently. Whether you need routine maintenance, major
            repairs, or custom upgrades, our team has the expertise and
            experience to get the job done right. We are dedicated to providing
            excellent customer service and ensuring that every customer leaves
            our shop satisfied and confident in the work we've done.
          </p>
          <div className={styles.brands}>
            <Image
              src={"/car-brands/citroen.png"}
              alt="image of citroen brand logo"
              width={100}
              height={100}
            />
            <Image
              src={"/car-brands/clio.png"}
              alt="image of clio brand logo"
              width={100}
              height={100}
            />
            <Image
              src={"/car-brands/fiat.png"}
              alt="image of fiat brand logo"
              width={100}
              height={100}
            />
            <Image
              src={"/car-brands/ford.png"}
              alt="image of ford brand logo"
              width={100}
              height={50}
            />
            <Image
              src={"/car-brands/iveco.png"}
              alt="image of iveco brand logo"
              width={100}
              height={30}
            />
            <Image
              src={"/car-brands/man.png"}
              alt="image of man brand logo"
              width={100}
              height={60}
            />
            <Image
              src={"/car-brands/mercedes.png"}
              alt="image of mercedes brand logo"
              width={100}
              height={100}
            />
            <Image
              src={"/car-brands/peugeot.png"}
              alt="image of peugeot brand logo"
              width={100}
              height={100}
            />
            <Image
              src={"/car-brands/vw.png"}
              alt="image of vw brand logo"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
