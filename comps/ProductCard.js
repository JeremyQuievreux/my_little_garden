//base React
import React, { useState , useContext } from 'react'
import { CartContext } from '../pages/_app'
//base next.js
import Link from 'next/link'
import Image from 'next/image'
//styles
import styles from '../styles/comps/ProductCard.module.scss'


function ProductCard({product}) {
    //context
    const cartContextValue = useContext(CartContext)

    //state
    const [ quantity, setQuantity ] = useState(1)
    //fonction on button to add quantity
    const addQuantity = (e) => {
        e.preventDefault()
        setQuantity(quantity + 1)
    }
    //fonction on button to remove quantity
    const removeQuantity = (e) => {
        e.preventDefault()
        if (quantity == 1) {
            null
        } else {
            setQuantity(quantity - 1)
        }
    }
    //fonction on validate button
    const addToCart = (e, product) => {
        e.preventDefault()
        // start here
        cartContextValue.updateCart([...cartContextValue.data, {article: product, quantity}])
        // finish here
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
                    <Image src={product.url_pic} alt="" height={400} width={400}/>
                </div>
                <div className={styles.product_footer}>
                    <p>Quantité : </p>
                    <div className={styles.product_quantity}>
                        <button className={styles.quantity_button} onClick={(e) => removeQuantity(e)}>-</button>
                        <p>{quantity}</p>
                        <button className={styles.quantity_button} onClick={(e) => addQuantity(e)}>+</button>
                    </div>
                    <p>{product.price} €</p>
                    <button onClick={(e) => addToCart(e, product)} className={styles.add_button}>Ajouter au panier</button>
                </div>
            </a>
        </Link>
        </div>
  )
}

export default ProductCard