import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
// import { getSortedPostsData } from '../lib/posts';
import styles from '../styles/Home.module.css';


// export async function getStaticProps(){
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

export async function getMusic() {
  const res = await fetch('https://api.spotify.com/v1/artists/2QcZxAgcs2I1q7CtCkl6MI');
  // Instead of the file system,
  // fetch post data from an external API endpoint
  return res.json();
}
export default function Home({allPostsData}) {
  const typeFilter = 'javascript';

  return (
    <Layout page='home'>
      <div className={styles.homecontainer}>
         <div className={styles.beach}>
           <div className={styles.intro}> 
              <h1>Hi,</h1>
               <p >This is Run Li, a graduate from University of Warwick, currently 
                studying React and looking for opportunity to become a front end developer!
              </p>
           </div> 
           <div className={styles.intro}> 
              <h1>Hi,</h1>
               <p >This is Run Li, a graduate from University of Warwick, currently 
                studying React and looking for opportunity to become a front end developer!
              </p>
           </div>     
          </div>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id} >
              <Link href={{
                pathname:`/posts/${id}`,
                query:{type:typeFilter}
              }}>
                {title}
              </Link>
              <br />
              <small className={utilStyles.lightText}>
              <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
      </div>
    </Layout>
  );
}