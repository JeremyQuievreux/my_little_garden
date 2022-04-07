import React, { useState } from 'react'

import styles from '../styles/comps/ProductCard.module.scss'


function ProductCard({product}) {

    const [ quantity, setQuantity ] = useState(1)

    const addQuantity = () => {
        setQuantity(quantity + 1)
    }

    const removeQuantity = () => {
        if (quantity == 1) {
            null
        } else {
            setQuantity(quantity - 1)
        }
    }

    const showBuyProduct = () => {
        console.log(product.name , quantity, "pour" , product.price * quantity, " €");
        setQuantity(1)
    }

  return (
    <div className={styles.container}>
        <div className={styles.product_header}>
            <p>{product.name}</p>
        </div>
        <div className={styles.product_body}>
            <img src={product.url_pic} alt="" />
        </div>
        <div className={styles.product_footer}>
            <p>Quantité :   <button className={styles.quantity_button} onClick={()=> removeQuantity()}>-</button> {quantity} <button className={styles.quantity_button} onClick={() => addQuantity()}>+</button></p>
            <p>{product.price} €</p>
            <button onClick={() => showBuyProduct()}>Ajouter au panier</button>
        </div>
    </div>
  )
}

export default ProductCard