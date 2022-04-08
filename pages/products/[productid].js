import axios from 'axios'
import React from 'react'

export const getStaticPaths = async () => {
  const result = await axios.get('http://localhost:3000/api/products');
  const data = await result.data;

  const paths = data.map(product => {
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
  const res = await axios('http://localhost:3000/api/products/'+ productid);
  const data = await res.data;

  return {
    props: {
      product: data
    }
  }
}

function productDetail({product}) {
  return (
    <div>
      <h1>Detail Page</h1>
      <p>{product.name}</p>
      <img src={product.url_pic} alt="" />
    </div>
  )
}

export default productDetail