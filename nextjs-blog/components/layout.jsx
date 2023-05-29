import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import NavBar from './NavBar.jsx';
const name = '李润';
export const siteTitle = 'Run Li\'s';



function PostsLayout(){
  return(
        <>
        <Link href="/">
          <Image
            priority
            src="/images/smile.jpg"
            className={utilStyles.borderCircle}
            height={108}
            width={108}
            alt=""
          />
        </Link>
        <h2 className={utilStyles.headingLg}>
          <Link href="/" className={utilStyles.colorInherit}>
            {name}
          </Link>
        </h2>
      </>
      )
}

function HomeLayout(){
  return (
    <div className={styles.beach}>
      <Image
            priority
            src="/images/beach.jpg"
            height={1500}
            width={1500}
            alt=""
          />
          </div>
  )
}

function MomentsLayout(){
  return (
    <>
    <style>{'html,body { background-color: black; }'}</style>
    </>
  )
}
function AboutLayout(){
  return (
    <>
        
      </>
  )
}

function MyFooter(){
  return(
    <footer className={styles.footer}>
        <small>copyright @ Run Li 李润</small>
      </footer>
  )
}
export default function Layout({ children, home, about, posts,moments}) {
  return (
    <div>
      {home && (
        <>
      <NavBar page='home'/>
        <HomeLayout />
        </>
      )}
      {moments && (
        <>
      <NavBar page='moments'/>
      <MomentsLayout />
        </>
      )}
      {about && (
        <>
      <NavBar page='about'/>
      <AboutLayout />
        </>
      )}
      <div className={styles.container}>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
      <MyFooter className={styles.footer} />
    </div>
  );
}