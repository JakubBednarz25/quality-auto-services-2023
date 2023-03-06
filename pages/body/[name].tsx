import Heading from "../../components/Heading/Heading";
import styles from "../../styles/Body.module.scss";

export const getServerSideProps = (ctx) => {
  const { name } = ctx.params;
  console.log(ctx.params);
  return {
    props: { name },
  };
};

const Body = (props) => {
  console.log(props.name);
  return (
    <div className={styles.container}>
      <Heading heading={props.name}/>
    </div>
  );
};

export default Body;
