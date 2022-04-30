import React , { useContext , useState} from 'react'
import CartLine from '../comps/CartLine'
import Cards from 'react-credit-cards'

import styles from '../styles/pages/Cart.module.scss'
import 'react-credit-cards/es/styles-compiled.css'

import { CartContext } from './_app'

function Cart() {

  const [ cardInfos, setCardInfos ] = useState({number:"", name:"", expiry: "", cvc: "", focus: ""})
  const [ showCard , setShowCard ] = useState(false)

  const cartContextValue = useContext(CartContext)

  const articles = cartContextValue.data

  const getTotalPrice = () => {
    let totalPrice = 0
    articles.forEach(article => {
      totalPrice += article.price * article.quantity
    })
    return totalPrice.toFixed(2)
  }

  return (
    <div className={styles.container}>
        <h1>Page panier</h1>
        <p>Work in progress...</p>
        <div className={styles.cart_line_container}>
        {articles.length > 0 
        ? <>
          {articles.map((article) => {
            return(
                <CartLine article={article} key={article._id}/>
                )
              })}
          <div className={styles.total_line}>
            <p className={styles.total_word}>Total : </p>
            <p className={styles.total_price}>{getTotalPrice()} €</p>
          </div>
          <button onClick={() => setShowCard(true)}>Payer</button>
        </>
        : <p>Votre panier est vide</p>}
        </div>
        {showCard &&
        <div>
          <Cards
            number={cardInfos.number}
            name={cardInfos.name}
            xpiry={cardInfos.expiry}
            cvc={cardInfos.cvc}
            focused={cardInfos.focus}
          />
          <form>
            <input 
              type="tel" 
              name='number' 
              placeholder='Card Number' 
              value={cardInfos.number} 
              onChange={e => setCardInfos({...cardInfos, number: e.target.value })}
              onFocus={e => setCardInfos({...cardInfos, focus: e.target.name })}
              />
              <input 
              type="text" 
              name='name' 
              placeholder='Name' 
              value={cardInfos.name} 
              onChange={e => setCardInfos({...cardInfos, name: e.target.value })}
              onFocus={e => setCardInfos({...cardInfos, focus: e.target.name })}
              />
              <input 
              type="text" 
              name='expiry' 
              placeholder='MM/YY expiry' 
              value={cardInfos.expiry} 
              onChange={e => setCardInfos({...cardInfos, expiry: e.target.value })}
              onFocus={e => setCardInfos({...cardInfos, focus: e.target.name })}
              />
              <input 
              type="tel" 
              name='cvc' 
              placeholder='cvc' 
              value={cardInfos.cvc} 
              onChange={e => setCardInfos({...cardInfos, cvc: e.target.value })}
              onFocus={e => setCardInfos({...cardInfos, focus: e.target.name })}
              />
          </form>
        </div>
        }
    </div>
  )
}

export default Cart