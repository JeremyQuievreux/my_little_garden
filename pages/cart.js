import React , { useContext } from 'react'

import styles from '../styles/pages/Cart.module.scss'

import { CartContext } from './_app'

function cart() {

  const cartContextValue = useContext(CartContext)

  return (
    <div className={styles.container}>
        <h1>Paga panier</h1>
        <p>Work in progress...</p>
        {cartContextValue.data && cartContextValue.data.map((item,index) => {
          return(
            <p key={index}>{item.article} X {item.quantity}</p>
          )
        })}
        <button onClick={() => cartContextValue.updateCart([])}>Reset Cart</button>
    </div>
  )
}

export default cart