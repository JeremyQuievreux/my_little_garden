import React , { useContext } from 'react'

import styles from '../styles/pages/Cart.module.scss'

import { CartContext } from './_app'

function Cart() {

  const cartContextValue = useContext(CartContext)

  const cartLines = cartContextValue.data

  return (
    <div className={styles.container}>
        <h1>Paga panier</h1>
        <p>Work in progress...</p>
        {cartLines && cartLines.map((cartLine) => {
          return(
            <p key={cartLine.article._id}>{cartLine.article.name} X {cartLine.quantity}</p>
          )
        })}
        <button onClick={() => cartContextValue.updateCart([])}>Reset Cart</button>
    </div>
  )
}

export default Cart