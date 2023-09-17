import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export async function getMusic() {
  const res = await fetch('https://api.spotify.com/v1/artists/2QcZxAgcs2I1q7CtCkl6MI');
  // Instead of the file system,
  // fetch post data from an external API endpoint
  return res.json();
}
export default function Home({ allPostsData }) {
  const typeFilter = 'javascript';

  return (
    <Layout page='home'>
      <div className={styles.container}>
        <div class={styles.card}>
          <img src='/images/avatar.jpg' id={styles.avatar}/>
          <div>
            <h3>Run Li</h3>
            <p>Frontend Developer</p>
            <h4>Shanghai, China</h4>
          </div>
        </div>
        <div className={styles.intro}>
          <h1>Hi,</h1>
          <p >This is Run Li, a graduate from University of Warwick, currently
            studying React and looking for opportunity to become a front end developer!
          </p>
        </div>
      </div>
    </Layout>
  );
}