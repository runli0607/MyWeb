import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';
import styles from '../styles/Home.module.css';

export async function getStaticProps(){
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export async function getMusic() {
  const res = await fetch('https://api.spotify.com/v1/artists/2QcZxAgcs2I1q7CtCkl6MI');
  // Instead of the file system,
  // fetch post data from an external API endpoint
  return res.json();
}
export default function Home({allPostsData}) {
  return (
    <>
         <div className={styles.beach}>
      <Image
            priority
            src="/images/beach.jpg"
            height={1500}
            width={1500}
            alt="beach"
            />
          </div>
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>Hi! This is Run Li</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id} >
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
              <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
          </>
  );
}