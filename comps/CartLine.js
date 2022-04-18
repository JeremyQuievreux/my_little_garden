import React ,{ useContext} from 'react'
import styles from '../styles/comps/CartLine.module.scss'
import Images from 'next/image'

import { deleteFromCart , addCartQuantity, removeCartQuantity} from '../utils/addtocart'

import { CartContext } from '../pages/_app'

import { BsFillTrashFill } from 'react-icons/bs'
import {AiFillPlusCircle, AiFillMinusCircle} from 'react-icons/ai'

function CartLine({article}) {

  const cartContextValue = useContext(CartContext)

  return (
    <div className={styles.line_container}>
      <div className={styles.line_left_block}>
        <Images src={article.url_pic} width={40} height={40} />
        <div className={styles.article_title}>
          <p className={styles.article_name} title={article.name}>{article.name} </p>
          <p className={styles.article_price}>{Number(article.price).toFixed(2)} €</p>
        </div>
      </div>
      <div className={styles.line_right_block}>
        <AiFillMinusCircle className={styles.line_button} onClick={() => removeCartQuantity(article, cartContextValue)}/>
        <p className={styles.article_quantity}>X {article.quantity}</p>
        <AiFillPlusCircle className={styles.line_button} onClick={() => addCartQuantity(article, cartContextValue)}/>
        <p className={styles.article_total_price}>{(article.quantity * article.price).toFixed(2)} €</p>
        <BsFillTrashFill className={styles.article_delete} onClick={() => deleteFromCart(article, cartContextValue)}/>
      </div>
    </div>
  )
}

export default CartLine