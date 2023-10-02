import Layout from "../components/layout"
import styles from '../styles/Projects.module.css';
import Link from 'next/link';
import BlackJack from "../components/BlackJack"



export default function Projects() {
    return (
        <Layout page='projects'>
            <main className={styles.main}>
                <h1>
                    Hi, those are my little tiny projects so far:
                </h1>

                <section className={styles['projects-container']}>

                    <div className={styles['note']}>
                        <h3 className={styles.projectheading}>
                            <a
                                href="https://my-web-46yv.vercel.app/"
                                target="_blank"
                            >
                                The note
                            </a>
                        </h3>
                        <a
                            href="https://my-web-46yv.vercel.app/"
                            target="_blank"
                        >
                            <img src="/images/note-demo.png" alt='demo for the note' />
                        </a>

                    </div>

                    <div className={styles['van-life']}>
                        <h3 className={styles.projectheading}>
                            <a
                                href="https://vanlife-app-seven.vercel.app/"
                                target="_blank"
                            >
                                The Van Life app 
                            </a>
                        </h3>
                        <a
                            href="https://vanlife-app-seven.vercel.app/"
                            target="_blank"
                        >
                            <img src="/images/van-demo.png" alt='demo for the van life app' />

                        </a>
                    </div>

                    <div className={styles['shopping-list']}>
                    <h3 className={styles.projectheading}>
                            <a
                                href="https://add-to-cart-lemon.vercel.app/"
                                target="_blank"
                            >
                                The Shopping Check List
                            </a>
                        </h3>
                        <a
                            href="https://add-to-cart-lemon.vercel.app/"
                            target="_blank"
                        >
                            <img src="/images/add-cart-demo.png" alt='demo for the shopping list app' />
                        </a>
                    </div>

                    <div>
                        <BlackJack />
                    </div>
                </section>

            </main>
        </Layout>
    )
}