import React , { useState , useContext} from 'react'
import Link from 'next/link'
import styles from '../styles/comps/Header.module.scss'

import { TiThMenu } from 'react-icons/ti'

import { CartContext } from '../pages/_app'

function Header() {
  //state
  const [ showMenu, setShowMenu ] = useState(false)
  //context
  const cartContextValue = useContext(CartContext)
  //function to toggle menu in mobil device
  const toogleMenu = () => {
    if (showMenu) {
      setShowMenu(false)
    } else {
      setShowMenu(true)
    }
  }

  //Calculate number of article in cart
  let numberOfArticle = 0
  cartContextValue.data.map((article) => {
    numberOfArticle += article.quantity
  })

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
            <Link href={"/cart"}><a><div><p>Panier</p><p className={styles.cart_number}>{numberOfArticle}</p></div></a></Link>
          </nav>
          <div className={styles.menu_mobile}>
            <div className={styles.menu_icon} onClick={() => toogleMenu()}>
              <TiThMenu size="30px"/>
            </div>
            {showMenu && 
              <div className={styles.drop_down_menu}>
                <Link href={"/"}><a onClick={() => toogleMenu()}><div><p>Acceuil</p></div></a></Link>
                <Link href={"/products"}><a onClick={() => toogleMenu()}><div><p>Nos Produits</p></div></a></Link>
                <Link href={"/about"}><a onClick={() => toogleMenu()}><div><p>A Propos</p></div></a></Link>
                <Link href={"/contact"}><a onClick={() => toogleMenu()}><div><p>Contactez nous</p></div></a></Link>
                <Link href={"/cart"}><a onClick={() => toogleMenu()}><div className={styles.cart_line}><p>Panier</p><p className={styles.cart_number}>{numberOfArticle}</p></div></a></Link>
              </div>
            }
          </div>
      </header>
  )
}

export default Header