import styles from '../styles/navbar.module.css';
import Link from 'next/link';
import React, { useState, useEffect } from "react"


function ChooseEmoji(whichpage) {
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

    case 'projects':
      return <h1 className={`${styles["emoji"]}`}>💼</h1>
  }
}
function underLine(pages, page) {
  if (pages.page == page) {
    return { "text-decoration": "underline", "text-decoration-thickness": "1px" }
  }
}

function navBarColor(pages, scroll) {
  switch (pages.page) {
    case 'moments':
      return scroll ? styles.moments : undefined
    default:
      return scroll ? styles.changecolor : undefined

  }
}

export default function NavBar(pages) {
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
  }, [])
  return (
    <nav className={navBarColor(pages, scroll)}>
      <Link href="/" >
        <h1 className={styles["nav-logo"]} style={pages.page == 'moments' ? { 'color': "white" } : {}}>Run润</h1>
      </Link>
      <ul className={`${styles["nav-item"]} ${pages.page == 'moments' ? styles["momentscolor"] : ''}`}>
        <li>Music</li>
        <li style={underLine(pages, 'projects')}><Link href="/projects">Projects</Link></li>
        <li style={underLine(pages, 'food')}><Link href="/food">Food</Link></li>
        <li style={underLine(pages, 'moments')}><Link href="/moments">Moments</Link></li>
        <li style={underLine(pages, 'about')}><Link href="/about">About</Link></li>
        <li style={underLine(pages, 'hire')}><Link href="/hire">Hire me!</Link></li>
      </ul>
      <ChooseEmoji page={pages.page} />
    </nav>
  )
}