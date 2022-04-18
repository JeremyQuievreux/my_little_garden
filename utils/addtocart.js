export const addToCart = (e, product, cartContextValue, quantity, setQuantity) => {
    e.preventDefault()
    //Array of Objet who contain all articles
    const allArticles = cartContextValue.data
    //Find the article in the array of articles by id
    const index = allArticles.findIndex(article => article._id == product._id)
    //If the article is not in the array
    if (index == -1) {
        //Add the article in the cart context
        cartContextValue.updateCart([...cartContextValue.data, {...product, quantity: quantity}])
    } else {
        /* const articleWithGoodID = allArticles.filter(article => article._id == product._id);
        articleWithGoodID[0].quantity += quantity
        cartContextValue.updateCart([...allArticles.slice(0, index), ...articleWithGoodID, ...allArticles.slice(index + 1)]) */
        //Update the quantity of the article in the cart context
        allArticles[index].quantity += quantity
        cartContextValue.updateCart([...allArticles])
    }
    //Reset the quantity
    setQuantity(1)
}
export const deleteFromCart = (product, cartContextValue) => {
    //Array of Objet who contain all articles
    const allArticles = cartContextValue.data
    //Find the article in the array of articles by id
    const otherArticles = allArticles.filter(article => article._id != product._id)
    cartContextValue.updateCart([...otherArticles])
}

export const addQuantity = (e, quantity, setQuantity) => {
    e.preventDefault()
    setQuantity(quantity + 1)
}

export const removeQuantity = (e, quantity, setQuantity) => {
    e.preventDefault()
    if (quantity == 1) {
        null
    } else {
        setQuantity(quantity - 1)
    }
}

export const addCartQuantity = (product, cartContextValue) => {
    const allArticles = cartContextValue.data
    const index = allArticles.findIndex(article => article._id == product._id)
    allArticles[index].quantity += 1
    cartContextValue.updateCart([...allArticles])
}

export const removeCartQuantity = (product, cartContextValue) => {
    const allArticles = cartContextValue.data
    const index = allArticles.findIndex(article => article._id == product._id)
    allArticles[index].quantity -= 1
    if (allArticles[index].quantity == 0) {
        deleteFromCart(product, cartContextValue)
    } else {
        cartContextValue.updateCart([...allArticles])
    }
}