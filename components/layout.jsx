import styles from '../styles/layout.module.css';
import NavBar from './NavBar.jsx';
import React from 'react';
import { BrowserRouter } from "react-router-dom";

function MyFooter(props) {
  const footerStyle = props.page == 'moments' ? styles.momentsfooter : styles.footer
  return (
    <footer className={footerStyle}>
      <small>copyright @ Run Li 李润</small>
    </footer>
  )
}



export default function Layout(props) {
  const containerclass = `${styles["container"]} ${props.page == 'moments' ? styles["momentsbg"] : ''}`
  return (
    <div className={containerclass}>
      <NavBar page={props.page} />
      <React.Suspense fallback={<h2>Loading...</h2>}>
        {props.children}
      </React.Suspense>
      <MyFooter page={props.page} />
    </div>
  );
}