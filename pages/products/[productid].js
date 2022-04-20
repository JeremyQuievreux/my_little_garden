//base React
import React , { useContext , useReducer }from 'react'

import { CartContext } from '../_app';
//Utils for connection to db
import Product from '../../models/Product';
import dbConnect from '../../utils/dbConnect';
//base Next.js
import Image from 'next/image'
//Style
import styles from '../../styles/pages/ProductDetail.module.scss'
// import external fonction to set quantity and add to cart
import { addToCart } from '../../utils/addtocart';

import { quantityReducer } from '../../reducer/quantityReducer';

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

function ProductDetail({product}) {
  //state
  const [ quantity, dispatch ] = useReducer(quantityReducer, 1);
  //Context
  const cartContextValue = useContext(CartContext)

  console.log(quantity);
  
  const stylecase = (value) => {
    if (value) {
      return (styles.green)
    }
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
          <p>Description : </p>

          <div className={styles.product_body}>
            <div className={styles.product_calendar}>
              <h2>Semis : </h2>
              <div className={styles.product_table}>
                {Object.entries(product.semis).map((test,index) => {
                  return (
                      <div key={index}className={`${styles.table_case} ${stylecase(test[1])}`}>
                        <p>{test[0].slice(0,1).toUpperCase()}</p>
                      </div>
                  )
                })}
              </div>
            </div>
            <div className={styles.product_calendar}>
              <h2>Récoltes : </h2>
              <div className={styles.product_table}>
                {Object.entries(product.recolte).map((test, index) => {
                  return (
                      <div key={index} className={`${styles.table_case} ${stylecase(test[1])}`}>
                        <p>{test[0].slice(0,1).toUpperCase()}</p>
                      </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className={styles.footer}>
            <p>Quantité : </p>
            <div className={styles.product_quantity}>
                <button className={styles.quantity_button} onClick={() => dispatch({type: "REMOVE"})}>-</button>
                <p>{quantity}</p>
                <button className={styles.quantity_button} onClick={() => dispatch({type: "ADD"})}>+</button>
            </div>
            <p>{product.price} €</p>
            <button onClick={(e) => {addToCart(e, product, cartContextValue, quantity),dispatch({type: "RESET"})}} className={styles.add_button}>Ajouter au panier</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail