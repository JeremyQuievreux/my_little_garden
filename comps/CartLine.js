import React from 'react'
import styles from '../styles/comps/CartLine.module.scss'
import Images from 'next/image'

function CartLine({article}) {
  return (
    <div className={styles.line_container}>
        <Images src={article.url_pic} width={40} height={40} />
        <div className={styles.article_name}>
          <p>{article.name} </p>
          <p>{Number(article.price).toFixed(2)} €</p>
        </div>
        <p className={styles.article_quantity}>X {article.quantity}</p>
        <p className={styles.article_total_price}>{(article.quantity * article.price).toFixed(2)} €</p>
    </div>
  )
}

export default CartLine