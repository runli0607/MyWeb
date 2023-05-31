import styles from './navbar.module.css';
import Link from 'next/link';
import React, { useState, useEffect } from "react"


function ChooseEmoji(whichpage){
  if (whichpage.page=='home') {
   return <h1 className={styles["emoji"]}>🏖️</h1>
  }else if (whichpage.page=='moments'){
  return <h1 className={styles["emoji"]}>🌍</h1>
  }else if (whichpage.page=='about'){
  return <h1 className={styles["emoji"]}>🥸</h1>
  }else if (whichpage.page=='posts'){
    return <h1 className={styles["emoji"]}>📨</h1>
  }else if (whichpage.page=='food'){
    return <h1 className={styles["emoji"]}>🍱</h1>
  }
}

function NavBarColor(pages,scroll){
  if (pages.page=='moments'){
    if (scroll){
      return styles['momentschangecolor']
    }else{
      return styles['navbar']
    }
  }else{
    if(scroll){
      return styles['changecolor']
    }else{
      return styles['navbar']
    }
  }
}

export default function NavBar(pages){
  const [scroll, setScroll] = useState(false)
  function changeBackground() {
    if (window.scrollY >= 66) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })
    return(
      <nav className={NavBarColor(pages,scroll)}>
        <Link href="/" >
        <h1 className={styles["nav-logo"]} style={ pages.page=='moments' ? {'color':"white"} : {}}>Run润</h1>
        </Link>
        <ul className={styles["nav-item"]} style={ pages.page=='moments' ? {'color':"white"} : {}}>
          <li>Music</li>
          <li><Link href="/food">Food</Link></li>
          <li><Link href="/moments">Moments</Link></li>
          <li><Link href="/about">About</Link></li>
          <li>Hire me!</li>
        </ul>
          <ChooseEmoji page={pages.page}/>
      </nav>
    )
  }