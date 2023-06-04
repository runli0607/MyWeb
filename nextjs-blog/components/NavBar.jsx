import styles from './navbar.module.css';
import Link from 'next/link';
import React, { useState, useEffect } from "react"


function ChooseEmoji(whichpage){
  switch (whichpage.page) {
    case 'home':
      return <h1 className={styles["emoji"]}>🏖️</h1>
    
    case 'moments':
      return <h1 className={styles["emoji"]}>🌍</h1>
   
    case 'about':
      return <h1 className={styles["emoji"]}>🥸</h1>    
  
    case 'posts':
      return <h1 className={styles["emoji"]}>📨</h1>     
    
    case 'food':
      return <h1 className={styles["emoji"]}>🍱</h1> 

    case 'hire':
      return <h1 className={styles["emoji"]}>🪧</h1>
    
    case 'music':
      return <h1 className={`${styles["emoji"]}`}>🎶</h1>
  }
}

function navBarColor(pages,scroll){
  switch (pages.page) {
    case 'moments':
      return scroll ? styles.moments : undefined
    default:
      return scroll ? styles.changecolor : undefined
    
  }}

  export default function NavBar(pages){
  const [scroll, setScroll] = useState(false)
  function changeBackground() {
    if (window.scrollY <= 70) {
      // console.log(1)
      setScroll(false)
    } else {
      setScroll(true)
    }
  }
  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
    // adding the event when scroll change background
  },[])
    return(
      <nav className={navBarColor(pages,scroll)}>
        <Link href="/" >
        <h1 className={styles["nav-logo"]} style={ pages.page=='moments' ? {'color':"white"} : {}}>Run润</h1>
        </Link>
        <ul className={styles["nav-item"]} style={ pages.page=='moments' ? {'color':"white"} : {}}>
          <li>Music</li>
          <li><Link href="/food">Food</Link></li>
          <li><Link href="/moments">Moments</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/hire">Hire me!</Link></li>
        </ul>
          <ChooseEmoji page={pages.page}/>
      </nav>
    )
  }