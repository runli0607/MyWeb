import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import NavBar from './NavBar.jsx';
const name = '李润';
export const siteTitle = 'Run Li\'s';

function MyFooter(props){
  const footerStyle = props.page == 'moments' ? styles.momentsfooter : styles.footer
  return(
    <footer className={footerStyle}>
        <small>copyright @ Run Li 李润</small>
      </footer>
  )
}
export default function Layout(props) {
  return (
    <div className={styles.container}>
      <NavBar page={props.page}/>
       {props.children}
      <MyFooter page={props.page}/>
    </div>
  );
}