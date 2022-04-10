import React , { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/comps/Header.module.scss'

import { TiThMenu } from 'react-icons/ti'

function Header() {

  const [ showMenu, setShowMenu ] = useState(false)

  const toogleMenu = () => {
    if (showMenu) {
      setShowMenu(false)
    } else {
      setShowMenu(true)
    }
  }

  return (
      <header className={styles.container}>
          <div className={styles.logo}>
            <h1>My Little Garden</h1>
          </div>
          <nav className={styles.desktop_menu}>
            <Link href={"/"}><a><div><p>Acceuil</p></div></a></Link>
            <Link href={"/products"}><a><div><p>Nos Produits</p></div></a></Link>
            <Link href={"/about"}><a><div><p>A Propos</p></div></a></Link>
            <Link href={"/contact"}><a><div><p>Contactez nous</p></div></a></Link>
            <Link href={"/cart"}><a><div><p>Panier</p><p className={styles.cart_number}>0</p></div></a></Link>
          </nav>
          <div className={styles.menu_mobile}>
            <div className={styles.menu_icon} onClick={() => toogleMenu()}>
              <TiThMenu size="30px"/>
            </div>
            {showMenu && 
              <div className={styles.drop_down_menu}>
                <Link href={"/"}><a><div><p>Acceuil</p></div></a></Link>
                <Link href={"/products"}><a><div><p>Nos Produits</p></div></a></Link>
                <Link href={"/about"}><a><div><p>A Propos</p></div></a></Link>
                <Link href={"/contact"}><a><div><p>Contactez nous</p></div></a></Link>
                <Link href={"/cart"}><a><div className={styles.cart_line}><p>Panier</p><p className={styles.cart_number}>0</p></div></a></Link>
              </div>
            }
          </div>
      </header>
  )
}

export default Header