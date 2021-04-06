// src/components/ShoppingList.js
import { useState } from "react"
import Product from "./Product"

const ShoppingList = (props) => {
  // const shopping = ["cumin", "curry", "café"] // Produits à ajouter
  const [shopping, setShopping] = useState(["cumin", "curry", "café"]) // Version dynamique
  const addToShoppingList = (product) => { // Fonction qui ajoute 
  setShopping([...shopping, product])
  }
  const removeFromShoppingList = (product) => { // Fonction qui retire
    setShopping(shopping.filter(el => el !== product))
  }
    return (
    <>
      <h2 className="mb-3 h4">Produits à acheter ({shopping.length}):</h2>
      <ul className="list-group mb-3 shadow">
        {shopping.map((product) => {
          return (
            <li className="list-group-item" key={product}>
              <Product 
              product={product} 
              removeFromShoppingList={removeFromShoppingList}/>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ShoppingList