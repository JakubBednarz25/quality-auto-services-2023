import Heading from '../components/Heading/Heading';
import styles from '../styles/About.module.scss';

const About = () => {
    return (<div className={styles.container}>
        <Heading heading={"About"}/>
        <div className={styles.wrapper}>
            <p>Quality Auto Services is a trusted and reputable company that has been serving the Lincolnshire community for over a decade. Founded in 2012, our team of experienced mechanics and technicians have been providing top-quality auto repair and maintenance services to customers throughout the region. We take pride in our work and are committed to ensuring that every customer receives the best possible service and care.</p>
            <p>At Quality Auto Services, we understand how important it is to have a reliable vehicle. That's why we go above and beyond to provide a wide range of services to help keep your vehicle running smoothly and efficiently. Whether you need routine maintenance, major repairs, or custom upgrades, our team has the expertise and experience to get the job done right. We are dedicated to providing excellent customer service and ensuring that every customer leaves our shop satisfied and confident in the work we've done.</p>
        </div>
    </div>)
}

export default About;