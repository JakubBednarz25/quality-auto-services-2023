import Heading from "../../components/Heading/Heading";
import styles from "../../styles/Body.module.scss";
import Image from 'next/image';
import Button from "../../components/Button/Button";

const trucks = [
  {
    id: 1,
    name: "Beaver tail",
    weights: [
      {
        weight: "3.5T",
        image: "/trucks/Beaver tail/beaver-tail-truck-body-3.5T.jpg",
        price: 350000
      },
      {
        weight: "5.0T",
        image: "/trucks/Beaver tail/beaver-tail-truck-body-5T.jpg",
        price: 450000
      },
      {
        weight: "7.0T",
        image: "/trucks/Beaver tail/beaver-tail-truck-body-7T.jpg",
        price: 600000
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
  console.log(truck);
  return (
    <div className={styles.container}>
      <Heading heading={truck.name} />
      <div className={styles.weights}>
        {truck.weights.map((weight) => (
          <article className={styles.truckBody}>
            <div className={styles.bodyImageContainer}>
              <Image
                src={weight.image}
                alt={`Recovery truck with the ${truck.name} body`}
                fill
                className="image"
              />
            </div>
            <div className={styles.shade}>
              <h2>{weight.weight}</h2>
              <label>{`From £${(weight.price/100).toFixed(2).toLocaleString()} + VAT`}</label>
              {/* <Button background={false}>Beaver tails</Button> */}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Body;
