import React from 'react'
import Link from 'next/link'
import styles from '../styles/comps/Header.module.scss'

function Header() {
  return (
      <header className={styles.container}>
          <div className={styles.logo}>
            <h1>My Little Garden</h1>
          </div>
          <nav>
            <Link href={"/"}><a>Acceuil</a></Link>
            <Link href={"/products"}><a>Nos Produits</a></Link>
            <Link href={"/about"}><a>A Propos</a></Link>
            <Link href={"/contact"}><a>Contactez nous</a></Link>
          </nav>
      </header>
  )
}

export default Header