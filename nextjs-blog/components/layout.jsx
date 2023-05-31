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
export default function Layout({ children,food, home, about, posts,moments}) {
  return (
      <div className={styles.container}>
        {home && (
        <NavBar page='home'/>
        )}
      {food && (
        <NavBar page='food'/>
        )}
      {moments && (
        <NavBar page='moments'/>
        )}
      {about && (
        <NavBar page='about'/>
        )}
      {posts && (
        <NavBar page='posts'/>
        )}
      {children}
      {!moments && (
      <MyFooter footer={styles.footer}/>
      )}
      {moments && (
      <MyFooter footer={styles.momentsfooter}/>
      )}
    </div>
  );
}