import Heading from "../../components/Heading/Heading";
import styles from "../../styles/Body.module.scss";
import Image from "next/image";
import Button from "../../components/Button/Button";
import ContactForm from "../../components/Form/ContactForm";
import Head from "next/head";

const trucks = [
  {
    id: 1,
    name: "Beaver tail",
    descriptions: [
      {
        id: 1,
        content:
          "The beaver tail body is designed to make loading and unloading vehicles a breeze. It features a low-angled platform that allows for easy access to the bed, making it ideal for vehicles that are difficult to load. The rear ramps can be easily stowed away when not in use, and when needed, can be easily deployed for loading and unloading.",
      },
      {
        id: 2,
        content:
          "Our beaver tail body also features a robust construction that can withstand the toughest of conditions. The body is constructed from high-quality materials that are designed to be durable and long-lasting, making it an excellent investment for any recovery business.",
      },
      {
        id: 3,
        content:
          "The beaver tail body is an excellent choice for those in need of a versatile and reliable recovery truck body. Its low-angled platform, sturdy construction, and customizable features make it an excellent investment for any business. Contact us today to learn more about our beaver tail body and our other recovery truck bodies, and how we can help you meet your recovery needs.",
      },
    ],
    images: [
      "/trucks/Beaver tail/beaver-tail-truck-body-3.5T.jpg",
      "/trucks/Beaver tail/beaver-tail-truck-body-5T.jpg",
      "/trucks/Beaver tail/beaver-tail-truck-body-7T.jpg",
    ],
    weights: [
      {
        weight: "3.5T",
        image: "/trucks/Beaver tail/beaver-tail-truck-body-3.5T.jpg",
        price: 350000,
      },
      {
        weight: "5.0T",
        image: "/trucks/Beaver tail/beaver-tail-truck-body-5T.jpg",
        price: 450000,
      },
      {
        weight: "7.0T",
        image: "/trucks/Beaver tail/beaver-tail-truck-body-7T.jpg",
        price: 600000,
      },
    ],
  },
  {
    id: 2,
    name: "Tilt & slide",
    descriptions: [
      {
        id: 1,
        content:
          "The tilt and slide body is designed to make the loading and unloading of vehicles a simple and efficient process. The platform is hydraulically operated, allowing for easy and precise positioning of the load. The tilting mechanism can also be adjusted to accommodate various types of vehicles, making it an ideal solution for businesses that need to transport a wide range of vehicles.",
      },
      {
        id: 2,
        content:
          "Our tilt and slide body features a robust and durable construction that is built to withstand the toughest of conditions. We use only high-quality materials that are designed to be long-lasting and resistant to wear and tear, ensuring that your investment is protected for years to come.",
      },
      {
        id: 3,
        content:
          "The tilt and slide body is an excellent choice for businesses that need a versatile and reliable recovery truck body. Its hydraulically operated platform, durable construction, and customizable features make it an ideal investment for any business. Contact us today to learn more about our tilt and slide body and our other recovery truck bodies, and how we can help you meet your recovery needs.",
      },
    ],
    images: [
      "/trucks/Tilt & slide/tilt-and-slide-1.jpg",
      "/trucks/Tilt & slide/tilt-and-slide-2.jpg",
      "/trucks/Tilt & slide/tilt-and-slide-3.jpg",
    ],
    weights: [
      {
        weight: "3.5T",
        image: "/trucks/Beaver tail/beaver-tail-truck-body-3.5T.jpg",
        price: 500000,
      },
      {
        weight: "5.0T",
        image: "/trucks/Beaver tail/beaver-tail-truck-body-5T.jpg",
        price: 900000,
      },
    ],
  },
  {
    id: 3,
    name: "Flat bed",
    descriptions: [
      {
        id: 1,
        content:
          "Our flat-bed body features a durable and robust construction that is designed to withstand heavy loads and tough conditions. We use high-quality materials that are designed to be long-lasting and resistant to wear and tear, ensuring that your investment is protected for years to come.",
      },
      {
        id: 2,
        content:
          "Our flat-bed body is an excellent choice for businesses that need to transport machinery, equipment, or other large items. Its durable construction, customizable features, and exceptional customer service make it an ideal investment for any business. Contact us today to learn more about our flat-bed body and our other recovery truck bodies, and how we can help you meet your recovery needs.",
      },
    ],
    images: [
      "/trucks/Flat bed/flat-bed-1.jpg",
      "/trucks/Flat bed/flat-bed-3.jpg",
      "/trucks/Flat bed/flat-bed-4.jpg",
    ],
    weights: [
      {
        weight: "3.5T",
        image: "/trucks/Beaver tail/beaver-tail-truck-body-3.5T.jpg",
        price: 300000,
      },
      {
        weight: "5.0T",
        image: "/trucks/Beaver tail/beaver-tail-truck-body-5T.jpg",
        price: 500000,
      },
      {
        weight: "7.0T",
        image: "/trucks/Beaver tail/beaver-tail-truck-body-5T.jpg",
        price: 700000,
      },
    ],
  },
  {
    id: 4,
    name: "Twin deck",
    descriptions: [
      {
        id: 1,
        content:
          "The twin-deck body is designed to maximize space and efficiency, allowing for the transportation of multiple vehicles at once. The upper deck is hydraulically operated, allowing for easy and precise positioning of the load. The lower deck can also be used to transport additional vehicles, maximizing the capacity of the body and increasing the efficiency of your business.",
      },
      {
        id: 2,
        content:
          "Our twin-deck body features a robust and durable construction that is built to withstand even the toughest conditions. We use only high-quality materials that are designed to be long-lasting and resistant to wear and tear, ensuring that your investment is protected for years to come.",
      },
      {
        id: 3,
        content:
          "The twin-deck body is an excellent choice for businesses that need a versatile and efficient recovery truck body. Its hydraulically operated upper deck, durable construction, and customizable features make it an ideal investment for any business. Contact us today to learn more about our twin-deck body and our other recovery truck bodies, and how we can help you meet your recovery needs.",
      },
    ],
    images: [
      "/trucks/Twin deck/twin-deck-1.jpg",
      "/trucks/Twin deck/twin-deck-2.jpg",
      "/trucks/Twin deck/twin-deck-3.jpg",
    ],
    weights: [
      {
        weight: "7.0T",
        image: "/trucks/Beaver tail/beaver-tail-truck-body-5T.jpg",
        price: 1500000,
      },
    ],
  },
];

export const getServerSideProps = (ctx) => {
  const { name } = ctx.params;
  console.log(ctx.params);
  const truck = trucks.find((t) => t.name === name);
  return {
    props: { truck },
  };
};

const Body = ({ truck }) => {
  return (
    <>
      <Head>
        <title>{`${truck.name} | Quality Auto Services`}</title>
      </Head>
      <div className={styles.container}>
        <Heading heading={truck.name} />
        <section className={styles.description}>
          {truck.descriptions.map((description) => (
            <p key={`paragraph-${description.id}`}>{description.content}</p>
          ))}
        </section>
        <section className={styles.images}>
          {truck.images.map((image) => (
            <Image
              key={image}
              src={image}
              alt={`Image of ${truck.name} truck body`}
              width={325}
              height={250}
            />
          ))}
        </section>
        <div className={styles.weights}>
          {truck.weights.map((weight) => (
            <article className={styles.truckBody} key={`${truck.name}-${weight.weight}`}>
              <header>
                <h3>{`${weight.weight} ${truck.name}`}</h3>
                <div className={styles.divider}></div>
                <span>
                  <p>Starting from</p>
                  <b>{`£${(weight.price / 100).toLocaleString()}.00`}</b>
                </span>
              </header>
            </article>
          ))}
        </div>
        <section className={styles.formWrapper}>
          <ContactForm />
        </section>
      </div>
    </>
  );
};

export default Body;
