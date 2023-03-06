import Button from "../components/Button/Button";
import styles from "../styles/Bodies.module.scss";
import Image from "next/image";
import Heading from "../components/Heading/Heading";
import TruckCard from "../components/Bodies/TruckCard";

const Bodies = () => {
  return (
    <div className={styles.container}>
      <Heading heading={"Bodies"}/>
      <div className={styles.trucksContainer}>
        <TruckCard name={"Beaver tail"} buttonText={"View beaver tails"} description={"Our Beaver Tail bodies are engineered with a gradual incline ramp that ensures the safe transportation of vehicles. We use only the highest-quality materials and components, including reinforced steel framework and advanced hydraulic systems, to ensure that our bodies are durable and long-lasting"} image={"/flat-bed-recovery-truck.jpg"} imageAlt={"/flat-bed-recovery-truck.jpg"}/>
        <TruckCard name={"Tilt & slide"} buttonText={"View tilt & slides"} description={"Our Tilt & Slide bodies feature a hydraulic tilt frame that allows the entire body to be raised and lowered for easy loading and unloading. Once the vehicle is on the body, it can be slid into position using a hydraulic winch or other lifting mechanism."} image={"/tilt_and_slide-recovery-truck.jpg"} imageAlt={"/tilt_and_slide-recovery-truck.jpg"}/>    
        <TruckCard name={"Flat bed"} buttonText={"View flat beds"} description={"Our Flat-Bed bodies feature a simple and versatile design,providing a flat, level surface for carrying equipment andmaterials of various sizes and weights. They are ideal for thetransportation of larger equipment, machinery, and other materials."} image={"/tilt_and_slide-recovery-truck.jpg"} imageAlt={"/flat-bed-recovery-truck.jpg"}/>
        <TruckCard name={"Twin deck"} buttonText={"View twin decks"} description={"Our Flat-Bed bodies feature a simple and versatile design,providing a flat, level surface for carrying equipment andmaterials of various sizes and weights. They are ideal for thetransportation of larger equipment, machinery, and other materials."} image={"/twin-deck-recovery-truck.jpg"} imageAlt={"/flat-bed-recovery-truck.jpg"}/>    
      </div>
    </div>
  );
};

export default Bodies;
