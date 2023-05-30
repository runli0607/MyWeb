import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import NavBar from './NavBar.jsx';
const name = '李润';
export const siteTitle = 'Run Li\'s';



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

function MyFooter(props){
  return(
    <footer className={props.footer}>
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
      {posts && (
        <>
      <NavBar page='posts'/>
      <AboutLayout />
        </>
      )}
      <div className={styles.container}>
      <main>{children}</main>
      {!(home||moments) && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
      {!moments && (
      <MyFooter footer={styles.footer}/>
      )}
      {moments && (
      <MyFooter footer={styles.momentsfooter}/>
      )}
    </div>
  );
}