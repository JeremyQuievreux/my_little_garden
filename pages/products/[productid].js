//base React
import React , { useState }from 'react'
//Utils for connection to db
import Product from '../../models/Product';
import dbConnect from '../../utils/dbConnect';
//base Next.js
import Image from 'next/image'
//Style
import styles from '../../styles/pages/ProductDetail.module.scss'

export const getStaticPaths = async () => {
  //Connect to db
  dbConnect();
  //get data from mongodb
  const data = await Product.find();

  const parsed = JSON.parse(JSON.stringify(data))

  const paths = parsed.map(product => {
    return {
      params: {productid: product._id.toString()}
    }
  })
  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  
  const productid = context.params.productid;
  dbConnect();

  const data = await Product.findOne({_id: productid});

  return {
    props: {
      product: JSON.parse(JSON.stringify(data))
    }
  }
}

function productDetail({product}) {
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
  const showBuyProduct = (e) => {
      e.preventDefault()
      alert(`${product.name} x ${quantity} pour un total de ${product.price * quantity} €`);
      setQuantity(1)
  }
  return (
    <div className={styles.main_container}>
      <p>Work In progress...</p>
      <div className={styles.product_container}>
        <div className={styles.left_block}>
          <Image src={product.url_pic} alt="" height={400} width={400} />
        </div>
        <div className={styles.right_block}>
          <h2>{product.name}</h2>
          <div className={styles.footer}>
            <p>Quantité : </p>
            <div className={styles.product_quantity}>
                <button className={styles.quantity_button} onClick={(e) => removeQuantity(e)}>-</button>
                <p>{quantity}</p>
                <button className={styles.quantity_button} onClick={(e) => addQuantity(e)}>+</button>
            </div>
            <p>{product.price} €</p>
            <button onClick={(e) => showBuyProduct(e)} className={styles.add_button}>Ajouter au panier</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default productDetail