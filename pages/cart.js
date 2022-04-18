import React , { useContext } from 'react'
import CartLine from '../comps/CartLine'

import styles from '../styles/pages/Cart.module.scss'

import { CartContext } from './_app'

function Cart() {

  const cartContextValue = useContext(CartContext)

  const articles = cartContextValue.data

  const getTotalPrice = () => {
    let totalPrice = 0
    articles.forEach(article => {
      totalPrice += article.price * article.quantity
    })
    return totalPrice.toFixed(2)
  }

  return (
    <div className={styles.container}>
        <h1>Page panier</h1>
        <p>Work in progress...</p>
        <div className={styles.cart_line_container}>
        {articles.length > 0 
        ? <>
          {articles.map((article) => {
            return(
                <CartLine article={article} key={article._id}/>
                )
              })}
          <div className={styles.total_line}>
            <p className={styles.total_word}>Total : </p>
            <p className={styles.total_price}>{getTotalPrice()} €</p>
          </div>
        </>
        : <p>Votre panier est vide</p>}
        </div>
    </div>
  )
}

export default Cart