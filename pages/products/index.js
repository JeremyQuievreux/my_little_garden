//imports
  //base React + style
import React, { useState , useEffect}  from 'react'
import styles from '../../styles/pages/Products.module.scss'
  //utils for connect to db
import Product from '../../models/Product';
import dbConnect from '../../utils/dbConnect';
  //Component
import ProductCard from '../../comps/ProductCard';
import FilterBar from '../../comps/FilterBar';
//pre rendering
export async function getStaticProps() {

  dbConnect();

  const data = await Product.find();

  return {
    props: {
      products: JSON.parse(JSON.stringify(data))
    }
  }
}
//component
function Products({products}) {

  const sortByAlpha = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  const orderedProducts = products.sort(sortByAlpha)

  const [ allProducts, setAllProducts ] = useState(products)

  return (
    <div className={styles.container}>
        <FilterBar products={orderedProducts} setAllProducts={setAllProducts} allProducts={allProducts}/>
        <h1>Nos Produits : </h1>
        <div className={styles.products_container}>
          {allProducts.map((product) => {
            return(
              <ProductCard key={product._id} product={product}/>
            )
          })}
        </div>
    </div>
  )
}

export default Products
