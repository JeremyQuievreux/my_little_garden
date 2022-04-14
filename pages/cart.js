import React , { useContext } from 'react'

import styles from '../styles/pages/Cart.module.scss'

import { CartContext } from './_app'

function Cart() {

  const cartContextValue = useContext(CartContext)

  const articles = cartContextValue.data

  return (
    <div className={styles.container}>
        <h1>Paga panier</h1>
        <p>Work in progress...</p>
        {articles && articles.map((article) => {
          return(
            <p key={article._id}>{article.name} X {article.quantity}</p>
          )
        })}
        <button onClick={() => cartContextValue.updateCart([])}>Reset Cart</button>
    </div>
  )
}

export default Cart