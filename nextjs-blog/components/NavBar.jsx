import React from 'react';
import styles from './layout.module.css';
import Link from 'next/link';


function ChooseEmoji(whichpage){
  if (whichpage.page=='home') {
   return <h1 className={styles["emoji"]}>🏖️</h1>
  }else if (whichpage.page=='moments'){
  return <h1 className={styles["emoji"]}>🌍</h1>
  }else if (whichpage.page=='about'){
  return <h1 className={styles["emoji"]}>🥸</h1>
  }
}
export default function NavBar(pages){
    return(
      <nav className={styles["navbar"]}>
        <Link href="/" >
        <h1 className={styles["nav-logo"]} style={ pages.page=='moments' ? {'color':"white"} : {}}>Run润</h1>
        </Link>
        <ul className={styles["nav-item"]} style={ pages.page=='moments' ? {'color':"white"} : {}}>
          <li>Music</li>
          <li>Food</li>
          <li><Link href="/moments">Moments</Link></li>
          <li><Link href="/about">About</Link></li>
          <li>Hire me!</li>
        </ul>
          <ChooseEmoji page={pages.page}/>
      </nav>
    )
  }