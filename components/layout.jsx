import styles from '../styles/layout.module.css';
import NavBar from './NavBar.jsx';
import React from 'react';

function MyFooter(props) {
  const footerStyle = `${styles['footer']}  ${props.page === 'moments' ? styles['moments'] : ''}`
  return (
    <footer className={footerStyle}>
      <small>©️ 2023  Run Li 李润</small>
    </footer>
  )
}



export default function Layout(props) {
  const container = `${styles["container"]} 
  ${props.page === 'home' ? styles['homebg'] : ''}
  ${props.page === 'moments' ? styles["momentsbg"] : ''}`
  return (
    <div className={container}>
      <NavBar page={props.page} />
      {props.children}
      <MyFooter page={props.page} />
    </div>
  );
}