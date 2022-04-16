import React , { useContext } from 'react'
import CartLine from '../comps/CartLine'

import styles from '../styles/pages/Cart.module.scss'

import { CartContext } from './_app'

function Cart() {

  const cartContextValue = useContext(CartContext)

  const articles = cartContextValue.data

  return (
    <div className={styles.container}>
        <h1>Page panier</h1>
        <p>Work in progress...</p>
        {articles && articles.map((article) => {
          return(
            <div className={styles.cart_line_container}>
              <CartLine article={article}/>
            </div>
          )
        })}
        <button onClick={() => cartContextValue.updateCart([])}>Reset Cart</button>
    </div>
  )
}

export default Cart