import styles from '../styles/navbar.module.css';
import Link from 'next/link';
import React, { useState, useEffect } from "react"


function ChooseEmoji({ activepage }) {
  switch (activepage) {
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
function underLine(page, activepage) {
  if (page === activepage) {
    return { "textDecoration": "underline", "textDecorationThickness": "1px" }
  }
}

function navBarColor(page, scroll) {
  switch (page) {
    case 'moments':
      return `${styles['momentsContainer']} ${scroll ? styles['momentsContainerScroll'] : ''}`
    default:
      return `${styles['mainContainer']} ${scroll ? styles['mainContainerScroll'] : ''}`

  }
}

export default function NavBar({ page }) {
  const [scroll, setScroll] = useState(false)

  function changeBackground() {
    console.log(window.scrollY)
    if (window.scrollY > 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }


  useEffect(() => {
    window.addEventListener("scroll", changeBackground, { passive: true })
    return () => {
      window.removeEventListener("scroll", changeBackground)
    }
    // adding the event when scroll change background
  }, [])

  useEffect(() => {
    changeBackground()
  }, []);

  return (
    <div className={styles.container}>
      <nav className={navBarColor(page, scroll)}>
        <Link href="/" >
          <div className={`${styles["nav-icon"]} ${scroll ? '' : styles['nav-icon-large']}`}>
            {
              page==='moments'
              ?
              <img src="/favicon_io/ryaniconmoments.png" alt="icon" />
              :
              <img src="/favicon_io/ryanicon.png" alt="icon" />
              }
            <h1 >
              Run润
            </h1>
          </div>
        </Link>
        <ul className={`${styles["nav-item"]}`}>
          <li>Music</li>
          <li style={underLine(page, 'projects')}><Link href="/projects">Projects</Link></li>
          <li style={underLine(page, 'food')}><Link href="/food">Food</Link></li>
          <li style={underLine(page, 'moments')}><Link href="/moments">Moments</Link></li>
          <li style={underLine(page, 'about')}><Link href="/about">About</Link></li>
          <li style={underLine(page, 'hire')}><Link href="/hire">Hire me!</Link></li>
        </ul>
        <ChooseEmoji activepage={page} />
      </nav>
    </div>
  )
}