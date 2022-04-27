import React ,{ useState , useEffect } from 'react'
import styles from '../styles/comps/FilterBar.module.scss'

function FilterBar({products, setAllProducts, allProducts}) {

  const [ filter, setFilter ] = useState("all");
  const [ sorter, setSorter ] = useState("all");

  //filter products
  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }
  //sorter products
  const handleSorterChange = (e) => {
    setSorter(e.target.value)
  }

  const filterFunc = (products, filter) => {
    if(filter === "all") {
      const notfilteredProduct = [...products]
      return notfilteredProduct
    } else {
      const filteredProduct = products.filter(product => product.famille == filter)
      return filteredProduct
    }
  }

  const sortByAlpha = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }
  const sortBySmallPrice = (a, b) => {
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }
    return 0;
  }
  const sortByBigPrice = (a, b) => {
    if (b.price < a.price) {
      return -1;
    }
    if (b.price > a.price) {
      return 1;
    }
    return 0;
  }
  const sortFunc = (products, sorter) => {
    if (sorter == "all") {
      const sortedProducts = products.sort(sortByAlpha)
      return sortedProducts
    }
    if (sorter == "smallprice") {
      const sortedProducts = products.sort(sortBySmallPrice)
      return sortedProducts
    }
    if (sorter == "bigprice") {
      const sortedProducts = products.sort(sortByBigPrice)
      return sortedProducts
    }
  }


  useEffect(() => {
    const filteredProducts = filterFunc(products, filter)
    const sortedProducts = sortFunc(filteredProducts, sorter)
    setAllProducts(sortedProducts)
  },[filter,sorter])

  

  return (
    <div className={styles.filterbar_container}>
        <label htmlFor="filter">Filtrer par :</label>
        <select name="filter" id="filter"  value={filter} onChange={(e) => handleFilterChange(e)}>
            <option value="all">Tous les produits</option>
            <optgroup label='Famille'>
              <option value="aromatique">Plantes Aromatiques</option>
              <option value="fruit">Legumes Fruits</option>
              <option value="feuille">Legumes Feuille</option>
              <option value="graine">Legumes Graine</option>
              <option value="racine">Legumes Racine</option>
            </optgroup>
        </select>
        <label htmlFor="sorter">Trier par :</label>
        <select name="sorter" id="sorter" value={sorter} onChange={(e) => handleSorterChange(e)}>
            <option value="all">---</option>
            <option value="smallprice">Prix croissant</option>
            <option value="bigprice">Prix décroissant</option>
        </select>
    </div>
  )
}

export default FilterBar