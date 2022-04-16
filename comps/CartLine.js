import React from 'react'
import styles from '../styles/pages/Cart.module.scss'

function CartLine({article}) {
  return (
    <div>
        <p key={article._id}>{article.name} X {article.quantity} | {article.quantity * article.price} €</p>
    </div>
  )
}

export default CartLine