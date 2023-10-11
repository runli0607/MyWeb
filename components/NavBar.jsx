import styles from '../styles/navbar.module.css';
import Link from 'next/link';
import React, { useState, useEffect } from "react"


function ChooseEmoji({ activepage }) {
  let select = ''
  switch (activepage) {
    case 'home':
      select = '🏖️'
      break

    case 'xpress':
      select = '🎙️'
      break

    case 'projects':
      select = '💼'
      break

    case 'food':
      select = '🍱'
      break

    case 'moments':
      select = '🌍'
      break

    case 'about':
      select = '🥸'
      break

    case 'hire':
      select = '🪧'
      break
  }
  return <h1 className={`${styles["emoji"]}`}>{`${select}`}</h1>
}
function underLine(page, activepage) {
  if (page === activepage) {
    return {
      "textDecoration": "underline",
      "textDecorationThickness": "2px"
    }
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
    <header className={styles.container}>
      <nav className={navBarColor(page, scroll)}>
        <Link href="/" >
          <div className={`${styles["nav-icon"]} ${scroll ? '' : styles['nav-icon-large']}`}>
            {
              page === 'moments'
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
          <li style={underLine(page, 'xpress')}><Link href="/xpress">Xpress</Link></li>
          <li style={underLine(page, 'projects')}><Link href="/projects">Projects</Link></li>
          <li style={underLine(page, 'food')}><Link href="/food">Food</Link></li>
          <li style={underLine(page, 'moments')}><Link href="/moments">Moments</Link></li>
          <li style={underLine(page, 'about')}><Link href="/about">About</Link></li>
          <li style={underLine(page, 'hire')}><Link href="/hire">Hire me!</Link></li>
        </ul>
        <ChooseEmoji activepage={page} />
      </nav>
    </header>
  )
}