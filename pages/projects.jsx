import Layout from "../components/layout"
import styles from '../styles/Projects.module.css';
import Link from 'next/link';
import BlackJack from "../components/BlackJack"



export default function Projects() {
    return (
        <Layout page='projects'>
            <div className={styles.main}>
                <div>
                    <h1>
                        Hi, those are my little tiny projects so far:
                    </h1>
                    <a href="https://my-web-46yv.vercel.app/" target="_blank">The Note </a>
                    <br />
                    <br />
                    <a href="https://vanlife-app-seven.vercel.app/">The VanLife </a>
                </div>

                <div>
                    <BlackJack/>
                </div>

            </div>
        </Layout>
    )
}