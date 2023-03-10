import Heading from "../components/Heading/Heading";
import styles from "../styles/Contact.module.scss";

import ContactForm from "../components/Form/ContactForm";

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Component } from "react";
import Head from "next/head";

class Contact extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Contact | Quality Auto Services</title>
        </Head>
        <div className={styles.container}>
          <Heading heading={"Contact"} />
          <div className={styles.wrapper}>
            <Map
              className={"map"}
              style={{
                height: "400px",
                position: "inline-block",
              }}
              containerStyle={{ position: "relative", width: "100vw" }}
              initialCenter={{
                lat: 52.986181,
                lng: -0.022353,
              }}
              google={this.props.google}
              zoom={14}
            >
              <Marker onClick={this.onMarkerClick} name={"Current location"} />
            </Map>
            <section className={styles.contactForm}>
              <ContactForm />
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDWFH8hUunW5Ym29qzj96Dy-l0rutvcepk",
})(Contact);
