//base React
import React, { useState , useContext } from 'react'
import { CartContext } from '../pages/_app'
//base next.js
import Link from 'next/link'
import Image from 'next/image'
//styles
import styles from '../styles/comps/ProductCard.module.scss'

import  { addToCart, addQuantity, removeQuantity }  from '../utils/addtocart'


function ProductCard({product}) {
    //context
    const cartContextValue = useContext(CartContext)
    //state
    const [ quantity, setQuantity ] = useState(1)
    //fonction on button to add quantity

  return (
        <div className={styles.container}>
        <Link href={"/products/"+ product._id}>
            <a>
                <div className={styles.product_header}>
                    <p>{product.name}</p>
                </div>
                <div className={styles.product_body}>
                    <Image src={product.url_pic} alt="" height={300} width={300}/>
                </div>
                <div className={styles.product_footer}>
                    <p>Quantité : </p>
                    <div className={styles.product_quantity}>
                        <button className={styles.quantity_button} onClick={(e) => removeQuantity(e, quantity, setQuantity)}>-</button>
                        <p>{quantity}</p>
                        <button className={styles.quantity_button} onClick={(e) => addQuantity(e, quantity, setQuantity)}>+</button>
                    </div>
                    <p>{product.price} €</p>
                    <button onClick={(e) => addToCart(e, product, cartContextValue, quantity, setQuantity)} className={styles.add_button}>Ajouter au panier</button>
                </div>
            </a>
        </Link>
        </div>
  )
}

export default ProductCard