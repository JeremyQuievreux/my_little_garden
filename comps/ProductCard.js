import React, { useState } from 'react'
import Link from 'next/link'

import styles from '../styles/comps/ProductCard.module.scss'


function ProductCard({product}) {

    const [ quantity, setQuantity ] = useState(1)

    const addQuantity = (e) => {
        e.preventDefault()
        setQuantity(quantity + 1)
    }

    const removeQuantity = (e) => {
        e.preventDefault()
        if (quantity == 1) {
            null
        } else {
            setQuantity(quantity - 1)
        }
    }

    const showBuyProduct = (e) => {
        e.preventDefault()
        alert(`${product.name} x ${quantity} pour un total de ${product.price * quantity} €`);
        setQuantity(1)
    }

  return (
        <div className={styles.container}>
        <Link href={"/products/"+ product._id}>
            <a>
                <div className={styles.product_header}>
                    <p>{product.name}</p>
                </div>
                <div className={styles.product_body}>
                    <img src={product.url_pic} alt="" />
                </div>
                <div className={styles.product_footer}>
                    <p>Quantité : </p>
                    <div className={styles.product_quantity}>
                        <button className={styles.quantity_button} onClick={(e) => removeQuantity(e)}>-</button>
                        <p>{quantity}</p>
                        <button className={styles.quantity_button} onClick={(e) => addQuantity(e)}>+</button>
                    </div>
                    <p>{product.price} €</p>
                    <button onClick={(e) => showBuyProduct(e)} className={styles.add_button}>Ajouter au panier</button>
                </div>
            </a>
        </Link>
        </div>
  )
}

export default ProductCard