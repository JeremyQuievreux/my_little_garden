export const FamilyFilterFunc = (products, filter) =>{
    if(filter === "all-family") {
        const notfilteredProduct = [...products]
        return notfilteredProduct
    } else {
        const filteredProduct = products.filter(product => product.famille == filter)
        return filteredProduct
    }
}

export const SowingFilterFunc = (products, filter) => {
    if(filter === "all-month") {
        const notfilteredProduct = [...products]
        return notfilteredProduct
    } else {
        const filteredProduct = products.filter(product => product.semis[filter] == true)
        return filteredProduct
    }
}

export const HarvestFilterFunc = (products, filter) => {
    if(filter === "all-month") {
        const notfilteredProduct = [...products]
        return notfilteredProduct
    } else {
        const filteredProduct = products.filter(product => product.recolte[filter] == true)
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
  const ascendingSort = (a, b) => {
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }
    return 0;
  }
  const descendingSort = (a, b) => {
    if (b.price < a.price) {
      return -1;
    }
    if (b.price > a.price) {
      return 1;
    }
    return 0;
  }

export const OrderProductsFunc = (products, sorter) => {
    if (sorter == "alpha") {
        const sortedProducts = products.sort(sortByAlpha)
        return sortedProducts
      }
      if (sorter == "ascending") {
        const sortedProducts = products.sort(ascendingSort)
        return sortedProducts
      }
      if (sorter == "descending") {
        const sortedProducts = products.sort(descendingSort)
        return sortedProducts
      }
}