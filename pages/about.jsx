import Layout from "../components/layout"
import Image from 'next/image';
import styles from '../styles/About.module.css';

function Parag(){
    return(
    <div className={styles.main}>
        <div>
             <Image src="/images/space.JPG"
                    width={2500}
                    height={2000}
            />
        </div>
        <div>
        <p>Hi this is me </p>
        <p>I am Run Li, which is actually 李润, I am a graduate from the 
            university of Warwick, and I am currently working on the site to 
            make it looks better, and keep adding functions to this website. 
            I am looking for a Quality Assurance Tester job, or STED, or automation
            tester, or automation engineer tester, whatever you call it. 
            Just doing the test anyway.🚦
        </p>
        <ul className={styles.lists}>
            <li>Selenium</li>
            <li>Appium</li>
            <li>Postman</li>
            <li>Jmeter</li>
        </ul>
        </div>
        <div>
             <Image src="/images/space.JPG"
                    width={2500}
                    height={2000}
            />
        </div>
    </div>
    )
}


export default function About(){
    return (
        <Layout page='about'>
            <Parag />
        </Layout>
    )
}